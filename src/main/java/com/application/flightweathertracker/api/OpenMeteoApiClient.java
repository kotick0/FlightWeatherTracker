package com.application.flightweathertracker.api;

import com.application.flightweathertracker.app.JsonDeserializer;
import com.application.flightweathertracker.model.open_meteo.OpenMeteoResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;

@Component
@Slf4j
@RequiredArgsConstructor
public class OpenMeteoApiClient {

    private final JsonDeserializer jsonDeserializer;

    @Value("${api.open-meteo}")
    private String openMeteoUri;

    @Value("${api.responses.dir}")
    private String apiResponsesDir;

    public String fetchAndSaveOpenMeteoData(double latitude, double longitude) {
        Path responsePath = Path.of(apiResponsesDir + "open-meteo" + File.separator + (int) latitude + "_" + (int) longitude + ".json");

        if (doesSavedResponseExist((int) latitude, (int) longitude)) {
            try {
                String cachedResponse = Files.readString(responsePath);
                OpenMeteoResponse response = jsonDeserializer.deserializeOpenMeteoResponse(cachedResponse);
                if (LocalDateTime.now().minusMinutes(15).isAfter(response.current().time())) {
                    return saveOpenMeteoResponse(responsePath, latitude, longitude);
                } else {
                    log.info("Reading from cached response");
                    return cachedResponse;
                }
            } catch (IOException e) {
                log.error(e.getMessage());
                throw new RuntimeException("Error reading cached response");
            }
        } else {
            return saveOpenMeteoResponse(responsePath, latitude, longitude);
        }
    }

    private String fetchData(double latitude, double longitude) {
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(String.format(openMeteoUri, latitude, longitude)))
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response == null || !String.valueOf(response.statusCode()).startsWith("2")) {
                throw new RuntimeException("Error fetching data from API");
            }
            return response.body();
        } catch (IOException | InterruptedException e) {
            log.error(e.getMessage());
        }
        throw new IllegalStateException();
    }

    private String saveOpenMeteoResponse(Path responsePath, double latitude, double longitude) {
        try {
            String responseBody = fetchData(latitude, longitude);
            Files.writeString(responsePath, responseBody);
            return responseBody;
        } catch (IOException e) {
            throw new RuntimeException("Error caching data from API");
        }
    }

    private boolean doesSavedResponseExist(int latitude, int longitude) {
        return Files.exists(Path.of(apiResponsesDir + "open-meteo" + File.separator + latitude + "_" + longitude + ".json"));
    }
}
