package com.application.flightweathertracker.api;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ImgwApiClientIT {

    @Value("${airports.config.path}")
    String configPath;

    @Autowired
    private ImgwApiClient imgwApiClient;

    private String airportsJson;

    @BeforeEach
    void setUp() throws IOException {
        airportsJson = Files.readString(Paths.get(configPath));
    }

    @Test
    void fetchMetar_returnsNonEmptyJsonResponse() {
        String result = imgwApiClient.fetchAllMetar();

        assertThat(result).isNotBlank();
        assertThat(result).startsWith("{");
    }
    @Test
    void fetchFromConfig() {
        System.out.println("Metars: " + imgwApiClient.fetchConfigAirportsMetar(configPath)
                            + "\nTafs: " + imgwApiClient.fetchConfigAirportsTaf(configPath)
                            + "\nSigmets: " + imgwApiClient.fetchAllSigmet());
    }
}
