package com.application.flightweathertracker;

import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
import com.application.flightweathertracker.imgw.sigmet.SigmetService;
import com.application.flightweathertracker.imgw.sigmet.model.ImgwSigmet;
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
    private ImgwJsonDeserializer imgwJsonDeserializer;
    @Autowired
    private SigmetService sigmetService;

    @BeforeEach
    void setup() throws IOException {
        sigmetJson = new String(sigmetResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    public void sigmetGet() {
        Map<String, ImgwSigmet> sigmets = imgwJsonDeserializer.deserializeSigmets(sigmetJson);
        ImgwSigmet sigmet = sigmets.get("M02");
        System.out.println(sigmetService.IsAirportInSigmet(sigmet, "EPTM"));
    }
}
