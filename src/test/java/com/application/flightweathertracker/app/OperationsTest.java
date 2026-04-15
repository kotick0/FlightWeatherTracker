package com.application.flightweathertracker.app;

import com.application.flightweathertracker.model.imgw.sigmet.ImgwSigmet;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@SpringBootTest
class OperationsTest {
    @Value("classpath:data/sigmet_response.json")
    Resource sigmetResponseResource;

    String sigmetJson;

    @Autowired
    private Deserializer deserializer;
    @Autowired
    private Operations operations;

    @BeforeEach
    void setup() throws IOException {
        sigmetJson = new String(sigmetResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    public void sigmetGet() {
        Map<String, ImgwSigmet> sigmets = deserializer.deserializeSigmets(sigmetJson);
        ImgwSigmet sigmet = sigmets.get("M02");
        System.out.println(operations.IsAirportInSigmet(sigmet, "EPTM"));
    }
}
