package com.application.flightweathertracker.api;

import com.application.flightweathertracker.config.AirportsConfig;
import com.application.flightweathertracker.model.config.airports.Airport;
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
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;


@Component
@Slf4j
@RequiredArgsConstructor
public class ImgwApiClient {
    private final ObjectMapper objectMapper;
    private final AirportsConfig airportsConfig;

    @Value("${api.imgw.metar}")
    String imgwMetar;

    @Value("${api.imgw.taf}")
    String imgwTaf;

    @Value("${api.imgw.sigmet}")
    String imgwSigmet;

    @Value("${airports.config.path}")
    String airportsConfigPathString;

    @Value("${api.responses.dir}")
    String apiResponsesDir;

    public String fetchAllMetar() { return fetchData(imgwMetar); }

    public String fetchAllSigmet() {
        return fetchData(imgwSigmet);
    }

    public String fetchConfigAirportsMetar() {
        try {
            String airportsConfigJson = Files.readString(Paths.get(airportsConfigPathString));
            return fetchAirportsFromConfig(imgwMetar, airportsConfigJson);
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error fetching METARs for airports Config");
        }
    }

    public String fetchConfigAirportsTaf() {
        try {
            String airportsConfigJson = Files.readString(Paths.get(airportsConfigPathString));
            return fetchAirportsFromConfig(imgwTaf, airportsConfigJson);
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error fetching TAFs for airports Config");
        }
    }

    public void saveAllImgwCache() {
        saveImgwCache(fetchConfigAirportsMetar(), "metar_response.json");
        saveImgwCache(fetchConfigAirportsTaf(), "taf_response.json");
        saveImgwCache(fetchAllSigmet(), "sigmet_response.json");
    }

    public void saveImgwCache(String apiResponse, String fileName) {
        Path cachePath = Paths.get(apiResponsesDir + fileName);
        try {
            Files.writeString(cachePath, apiResponse);
            log.info("Saving API response to file: {}", cachePath);
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error caching " + fileName);
        }
    }

    private String fetchData(String uri) {
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
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

    private String fetchAirportsFromConfig(String uri, String airportsConfigJson) {
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

