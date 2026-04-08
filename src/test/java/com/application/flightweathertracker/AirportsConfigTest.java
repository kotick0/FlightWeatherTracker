package com.application.flightweathertracker;

import com.application.flightweathertracker.config.AirportsConfig;
import com.application.flightweathertracker.model.config.airports.Airport;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@SpringBootTest
class AirportsConfigTest {
    @Value("classpath:data/metar_response.json")
    Resource metarResponseResource;

    @Value("${airports.config.path}")
    String configPath;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private AirportsConfig airportsConfig;

    private String metarJson;

    //private String airportsConfigJson;

    @BeforeEach
    void setUp() throws IOException {
        metarJson = new String(metarResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        //airportsConfigJson = Files.readString(Paths.get(configPath));
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
        airportsConfig.FetchAndSaveAirports(metarJson);

        objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(configPath), airports);
    }
}
