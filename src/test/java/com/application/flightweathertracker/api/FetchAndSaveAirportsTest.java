package com.application.flightweathertracker.api;

import com.application.flightweathertracker.imgw.model.airports.Airport;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.json.JsonTest;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@JsonTest
class FetchAndSaveAirportsTest {
    @Value("classpath:data/metar_response.json")
    Resource metarResponseResource;

    @Autowired
    private ObjectMapper objectMapper;

    private String metarJson;

    @BeforeEach
    void setUp() throws IOException {
        metarJson = new String(metarResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    void fetchAirportsTest() {
        Map<String, Airport> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(metarJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode airport = entry.getValue().path("airport");
            airport.forEach(property -> airports.putIfAbsent(icao, objectMapper.treeToValue(airport, Airport.class)));
        });

        objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File("src/main/java/com/application/flightweathertracker/config/AirportsConfig.json"), airports);
    }
}
