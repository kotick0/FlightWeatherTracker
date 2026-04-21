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
class SigmetAreaCheckTest {
    @Value("classpath:data/sigmet_response.json")
    Resource sigmetResponseResource;

    String sigmetJson;

    @Autowired
    private JsonDeserializer jsonDeserializer;
    @Autowired
    private SigmetAreaCheck sigmetAreaCheck;

    @BeforeEach
    void setup() throws IOException {
        sigmetJson = new String(sigmetResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    public void sigmetGet() {
        Map<String, ImgwSigmet> sigmets = jsonDeserializer.deserializeSigmets(sigmetJson);
        ImgwSigmet sigmet = sigmets.get("M02");
        System.out.println(sigmetAreaCheck.IsAirportInSigmet(sigmet, "EPTM"));
    }
}
