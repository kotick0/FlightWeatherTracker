package com.application.flightweathertracker.config;

import com.application.flightweathertracker.model.config.airports.Airport;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.HashMap;

@RequiredArgsConstructor
@Component
public class AirportsConfig {
    @Value("${airports.config.path}")
    private String airportsConfigPath;

    private final ObjectMapper objectMapper;

    public void FetchAndSaveAirports(String metarOrTafResponseJson) {
        HashMap<String, Airport> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(metarOrTafResponseJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode airport = entry.getValue().path("airport");
            airport.forEach(property -> airports.putIfAbsent(icao, objectMapper.treeToValue(airport, Airport.class)));
        });

        objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(airportsConfigPath), airports);
    }

    public HashMap<String, Airport> readAirportsConfig(String airportsConfigJson) {
        return objectMapper.readValue(airportsConfigJson, new TypeReference<>() {
        });
    }
}
