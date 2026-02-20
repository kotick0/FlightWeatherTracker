package com.application.flightweathertracker.api;

import com.application.flightweathertracker.imgw.model.metar.ImgwMetar;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Component
public class Deserializer {
    private final ObjectMapper objectMapper;

    public Map<String, ImgwMetar> deserializeMetars(String json) {
        Map<String, ImgwMetar> metars = new HashMap<>();
        JsonNode root = objectMapper.readValue(json, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode pl = entry.getValue().path("metars").path("sa").path("pl");
            pl.forEach(metar -> metars.putIfAbsent(icao, objectMapper.treeToValue(metar, ImgwMetar.class)));
        });
        return metars;
    }
}
