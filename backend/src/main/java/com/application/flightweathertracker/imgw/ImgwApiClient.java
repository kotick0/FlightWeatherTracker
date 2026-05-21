package com.application.flightweathertracker.imgw;

import com.application.flightweathertracker.config.airports.database.AirportsRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.node.ObjectNode;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;


@Component
@Slf4j
@RequiredArgsConstructor
public class ImgwApiClient {
    private final ObjectMapper objectMapper;
    private final AirportsRepository airportsRepository;

    @Value("${api.imgw.metar.taf}")
    String imgwMetarTaf;

    @Value("${api.imgw.sigmet}")
    String imgwSigmet;

    public String fetchAllMetar() {
        return fetchData(imgwMetarTaf);
    }

    public String fetchAllSigmet() {
        return fetchData(imgwSigmet);
    }

    private String fetchData(String uri) {
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                log.error("IMGW API returned non-2xx status for '{}': {}", uri, response.statusCode());
                throw new RuntimeException("IMGW API returned non-2xx status for: " + uri + ", status: " + response.statusCode());
            }
            return response.body();
        } catch (IOException | InterruptedException e) {
            log.error("Failed to fetch data from IMGW API '{}': {}", uri, e.getMessage(), e);
            throw new RuntimeException("Failed to fetch data from IMGW API: " + uri, e);
        }
    }

    public String fetchDataPerAirport() {
        List<String> airports = airportsRepository.findAllDistinctIcaoCodes();
        String responseBody = fetchData(imgwMetarTaf);
        JsonNode root = objectMapper.readTree(responseBody);

        ObjectNode airportsFromConfig = objectMapper.createObjectNode();

        for (String icao : airports) {
            if (responseBody.contains(icao)) {
                JsonNode airportNode = root.get(icao);
                airportsFromConfig.set(icao, airportNode);
            }
        }
        return airportsFromConfig.toString();
    }
}

