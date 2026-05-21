package com.application.flightweathertracker.open_meteo;

import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
import com.application.flightweathertracker.open_meteo.database.OpenMeteoResponsesRepository;
import com.application.flightweathertracker.open_meteo.database.OpenMeteoResponsesTable;
import com.application.flightweathertracker.open_meteo.model.OpenMeteoResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.util.Optional;

@Component
@Slf4j
@RequiredArgsConstructor
public class OpenMeteoApiClient {

    private final OpenMeteoDeserializer openMeteoDeserializer;
    private final OpenMeteoResponsesRepository openMeteoResponsesRepository;

    @Value("${api.open-meteo}")
    private String openMeteoUri;

    public void fetchAndSaveOpenMeteoData(double latitude, double longitude) {
        Optional<OpenMeteoResponsesTable> latestResponse = openMeteoResponsesRepository
                .findTop1ByLatitudeAndLongitudeOrderByIdDesc(latitude, longitude);

        latestResponse.ifPresentOrElse(oldResponse -> {
            if (LocalDateTime.now().minusMinutes(15).isAfter(oldResponse.getCurrent().time())) {
                saveNewResponse(latitude, longitude);
            }
        }, () -> saveNewResponse(latitude, longitude));
    }

    private void saveNewResponse(double latitude, double longitude) {
        String newResponseJson = fetchData(latitude, longitude);
        OpenMeteoResponse newResponse = openMeteoDeserializer.deserializeOpenMeteoResponse(newResponseJson);
        OpenMeteoResponsesTable responseRecord = OpenMeteoResponsesTable.builder()
                .fetchedAt(LocalDateTime.now())
                .latitude(latitude)
                .longitude(longitude)
                .timezone(newResponse.timezone())
                .current_units(newResponse.current_units())
                .current(newResponse.current())
                .hourly_units(newResponse.hourly_units())
                .hourly(newResponse.hourly())
                .build();
        openMeteoResponsesRepository.save(responseRecord);
    }

    private String fetchData(double latitude, double longitude) {
        String uri = String.format(openMeteoUri, latitude, longitude);
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response == null || !String.valueOf(response.statusCode()).startsWith("2")) {
                log.error("OpenMeteo API returned non-2xx status for '{}': {}", uri, response != null ? response.statusCode() : "null");
                throw new RuntimeException("OpenMeteo API returned non-2xx status for: " + uri + ", status: " + (response != null ? response.statusCode() : "null"));
            }
            return response.body();
        } catch (IOException | InterruptedException e) {
            log.error("Failed to fetch data from OpenMeteo API '{}': {}", uri, e.getMessage(), e);
            throw new RuntimeException("Failed to fetch data from OpenMeteo API: " + uri, e);
        }
    }


}
