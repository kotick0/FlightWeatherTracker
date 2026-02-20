package com.application.flightweathertracker;


import com.application.flightweathertracker.model.metar.Metar;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@JsonTest
class CustomDeserializerTest {
    @Value("classpath:data/metar_response.json")
    Resource metarResponseResource;

    @Autowired
    private ObjectMapper objectMapper;

    private String json;

    @BeforeEach
    void setup() throws IOException {
        json = new String(metarResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    void shouldDeserializeMetars() throws IOException {
        Map<String, Metar> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(json, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey(); // e.g. "EPLB"
            JsonNode pl = entry.getValue().path("metars").path("sa").path("pl");
            pl.forEach(metar -> airports.putIfAbsent(icao, objectMapper.treeToValue(metar, Metar.class)));
        });

        for(String key : airports.keySet()) {
            Metar metar = airports.get(key);
            System.out.println(key + ": " + metar);
        }
    }
}