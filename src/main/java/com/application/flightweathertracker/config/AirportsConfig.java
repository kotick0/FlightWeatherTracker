package com.application.flightweathertracker.config;

import com.application.flightweathertracker.model.imgw.airports.Airport;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;

@Slf4j
@RequiredArgsConstructor
@Component
public class AirportsConfig {
    @Value("${airports.config.path}")
    private String airportsConfigPathString;

    private final ObjectMapper objectMapper;

    public void saveDefaultAirportsConfig(String metarOrTafResponseJson) {
        HashMap<String, Airport> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(metarOrTafResponseJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode airport = entry.getValue().path("airport");
            airport.forEach(property -> airports.putIfAbsent(icao, objectMapper.treeToValue(airport, Airport.class)));
        });

        objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(airportsConfigPathString), airports);
    }

    public HashMap<String, Airport> readAirportsConfig(String airportsConfigJson) {
        return objectMapper.readValue(airportsConfigJson, new TypeReference<>() {
        });
    }

    public boolean configNotExists() {
        return Files.notExists(Paths.get(airportsConfigPathString));
    }
}
