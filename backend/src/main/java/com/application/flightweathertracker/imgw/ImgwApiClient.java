package com.application.flightweathertracker.imgw;

import com.application.flightweathertracker.config.AirportsConfig;
import com.application.flightweathertracker.imgw.common.model.Airport;

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
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;


@Component
@Slf4j
@RequiredArgsConstructor
public class ImgwApiClient {
    private final ObjectMapper objectMapper;
    private final AirportsConfig airportsConfig;

    @Value("${api.imgw.metar.taf}")
    String imgwMetarTaf;

    @Value("${api.imgw.sigmet}")
    String imgwSigmet;

    @Value("${airports.config.path}")
    String airportsConfigPathString;

    public String fetchAllMetar() {
        return fetchData(imgwMetarTaf);
    }

    public String fetchAllSigmet() {
        return fetchData(imgwSigmet);
    }

    public String fetchMetarsForAirportsConfig() {
        try {
            String airportsConfigJson = Files.readString(Paths.get(airportsConfigPathString));
            return fetchDataForAirportsConfig(imgwMetarTaf, airportsConfigJson);
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error fetching METARs for airports defined in config");
        }
    }

    public String fetchTafsForAirportsConfig() {
        try {
            String airportsConfigJson = Files.readString(Paths.get(airportsConfigPathString));
            return fetchDataForAirportsConfig(imgwMetarTaf, airportsConfigJson);
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error fetching TAFs for airports defined in config");
        }
    }

    private String fetchData(String uri) {
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                throw new RuntimeException("API returned non-2xx status: " + response.statusCode());
            }
            return response.body();
        } catch (IOException | InterruptedException e) {
            log.error(e.getMessage());
        }
        throw new IllegalStateException();
    }

    private String fetchDataForAirportsConfig(String uri, String airportsConfigJson) {
        String responseBody = fetchData(uri);
        JsonNode root = objectMapper.readTree(responseBody);

        ObjectNode airportsFromConfig = objectMapper.createObjectNode();
        HashMap<String, Airport> airports = airportsConfig.readAirportsConfig(airportsConfigJson);

        for (String key : airports.keySet()) {
            if (responseBody.contains(key)) {
                JsonNode airportNode = root.get(key);
                airportsFromConfig.set(key, airportNode);
            }
        }
        return airportsFromConfig.toString();
    }
}

