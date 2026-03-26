package com.application.flightweathertracker.config;

import com.application.flightweathertracker.imgw.model.airports.Airport;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Component
public class FetchAndSaveAirports {
    private final ObjectMapper objectMapper;

    public void FetchAirports(String json) {
        Map<String, Airport> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(json, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode airport = entry.getValue().path("airport");
            airport.forEach(property -> airports.putIfAbsent(icao, objectMapper.treeToValue(airport, Airport.class)));
        });

        objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File("src/main/java/com/application/flightweathertracker/config/AirportsConfig.json"), airports);
    }
}
