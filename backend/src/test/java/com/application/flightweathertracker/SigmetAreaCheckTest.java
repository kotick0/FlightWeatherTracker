package com.application.flightweathertracker;

import com.application.flightweathertracker.imgw.sigmet.service.SigmetService;
import com.application.flightweathertracker.imgw.sigmet.view.SigmetView;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@SpringBootTest
class SigmetAreaCheckTest {
    @Value("classpath:data/sigmet_response.json")
    Resource sigmetResponseResource;

    String sigmetJson;

    @Autowired
    private SigmetService sigmetService;

    @BeforeEach
    void setup() throws IOException {
        sigmetJson = new String(sigmetResponseResource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
    }

    @Test
    public void sigmetGet() {
        if (!sigmetService.getAll().isEmpty()) {
            SigmetView sigmet = sigmetService.getAll().getFirst();
            System.out.println(sigmet);
        }
    }
}
