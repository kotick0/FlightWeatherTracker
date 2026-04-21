package com.application.flightweathertracker.app;


import com.application.flightweathertracker.model.imgw.metar.ImgwMetar;
import com.application.flightweathertracker.model.imgw.sigmet.ImgwSigmet;
import com.application.flightweathertracker.model.imgw.taf.ImgwTaf;
import com.application.flightweathertracker.model.imgw.taf.TafData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@SpringBootTest
class CustomJsonDeserializerTest {
    @Value("classpath:data/metar_response.json")
    Resource metarResponseResource;

    @Value("classpath:data/taf_response.json")
    Resource tafResponseResource;

    @Value("classpath:data/sigmet_response.json")
    Resource sigmetResponseResource;

    @Autowired
    private ObjectMapper objectMapper;

    private String metarJson;
    private String tafJson;
    private String sigmetJson;

    @BeforeEach
    void setup() throws IOException {
        if(metarResponseResource.exists()){
            metarJson = new String(metarResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        } else {
            throw new FileNotFoundException("metar_response.json not found");
        }
        if(tafResponseResource.exists()){
            tafJson = new String(tafResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        } else {
            throw new FileNotFoundException("taf_response.json not found");
        }
        if(sigmetResponseResource.exists()){
            sigmetJson = new String(sigmetResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        } else  {
            throw new FileNotFoundException("sigmet_response.json not found");
        }
    }

    @Test
    void shouldDeserializeMetars() {
        Map<String, ImgwMetar> airports = new HashMap<>();
        JsonNode root = objectMapper.readValue(metarJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode pl = entry.getValue().path("metars").path("sa").path("pl");
            pl.forEach(metar -> airports.putIfAbsent(icao, objectMapper.treeToValue(metar, ImgwMetar.class)));
        });

        for (String key : airports.keySet()) {
            ImgwMetar metar = airports.get(key);
            System.out.println(key + ": " + metar);
        }
    }

    @Test
    void shouldDeserializeTafs() {
        Map<String, TafData> tafs = new HashMap<>();
        JsonNode root = objectMapper.readValue(tafJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode fcPl = entry.getValue().path("tafs").path("fc").path("pl");
            JsonNode ftPl = entry.getValue().path("tafs").path("ft").path("pl");

            fcPl.forEach(taf -> tafs.computeIfAbsent(icao, k -> new TafData()).setFc(objectMapper.treeToValue(taf, ImgwTaf.class)));
            ftPl.forEach(taf -> tafs.computeIfAbsent(icao, k -> new TafData()).setFt(objectMapper.treeToValue(taf, ImgwTaf.class)));

        });
        for (String key : tafs.keySet()) {
            TafData taf = tafs.get(key);
            System.out.println(key + ": " + taf);
        }
    }

    @Test
    void shouldDeserializeSigmets() {
        List<ImgwSigmet> list = objectMapper.readValue(sigmetJson, new TypeReference<>() {
        });
        Map<String, ImgwSigmet> sigmets = list.stream().collect(Collectors.toMap(ImgwSigmet::id, sigmet -> sigmet));
        for (String key : sigmets.keySet()) {
            System.out.println(key + ": " + sigmets.get(key));
        }
    }
}
