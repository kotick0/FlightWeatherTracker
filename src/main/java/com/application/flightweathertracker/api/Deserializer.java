package com.application.flightweathertracker.api;

import com.application.flightweathertracker.model.metar.Metar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.Map;

@Component
public class Deserializer {
    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private FetchData fetchData;

    public Map<String, Metar> deserializeMetars(String json) {
        Map<String, Metar> metars = new HashMap<>();
        JsonNode root = objectMapper.readValue(json, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode pl = entry.getValue().path("metars").path("sa").path("pl");
            pl.forEach(metar -> metars.putIfAbsent(icao, objectMapper.treeToValue(metar, Metar.class)));
        });
        return metars;
    }
}
