package com.application.flightweathertracker;


import com.application.flightweathertracker.imgw.model.metar.ImgwMetar;
import com.application.flightweathertracker.imgw.model.taf.ImgwTaf;
import com.application.flightweathertracker.imgw.model.taf.TafData;
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

    @Value("classpath:data/taf_response.json")
    Resource tafResponseResource;

    @Autowired
    private ObjectMapper objectMapper;

    private String metarJson;
    private String tafJson;

    @BeforeEach
    void setup() throws IOException {
        metarJson = new String(metarResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        tafJson = new String(tafResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    void shouldDeserializeMetars() throws IOException {
        Map<String, ImgwMetar> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(metarJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode pl = entry.getValue().path("metars").path("sa").path("pl");
            pl.forEach(metar -> airports.putIfAbsent(icao, objectMapper.treeToValue(metar, ImgwMetar.class)));
        });

        for(String key : airports.keySet()) {
            ImgwMetar metar = airports.get(key);
            System.out.println(key + ": " + metar);
        }
    }

    @Test
    void shouldDeserializeTafs() throws IOException {
        Map<String, TafData> tafs = new HashMap<>();
        JsonNode root = objectMapper.readValue(tafJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode fcPl  = entry.getValue().path("tafs").path("fc").path("pl");
            JsonNode ftPl  = entry.getValue().path("tafs").path("ft").path("pl");

//            fcPl.forEach(taf -> tafs.put(icao, new TafData(objectMapper.treeToValue(taf, ImgwTaf.class), null)));
//            ftPl.forEach(taf -> tafs.put(icao, new TafData(null, objectMapper.treeToValue(taf, ImgwTaf.class))));

            fcPl.forEach(taf -> tafs.get(icao).setFc(objectMapper.treeToValue(taf, ImgwTaf.class)));
            ftPl.forEach(taf -> tafs.get(icao).setFt(objectMapper.treeToValue(taf, ImgwTaf.class)));

        });

        for(String key : tafs.keySet()) {
            TafData taf = tafs.get(key);
//            ImgwTaf fcTaf = tafs.get(key).fc();
//            ImgwTaf ftTaf = tafs.get(key).ft();
            System.out.println(key + ": " + taf + "\n");
        }
    }
}
