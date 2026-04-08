package com.application.flightweathertracker.api;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class FetchDataIT {

    @Value("${airports.config.path}")
    String configPath;

    @Autowired
    private FetchData fetchData;

    private String airportsJson;

    @BeforeEach
    void setUp() throws IOException {
        airportsJson = Files.readString(Paths.get(configPath));
    }

    @Test
    void fetchMetar_returnsNonEmptyJsonResponse() {
        String result = fetchData.fetchAllMetar();

        assertThat(result).isNotBlank();
        assertThat(result).startsWith("{");
    }
    @Test
    void fetchFromConfig() {
        System.out.println("Metars: " + fetchData.fetchConfigAirportsMetar(configPath)
                            + "\nTafs: " + fetchData.fetchConfigAirportsTaf(configPath)
                            + "\nSigmets: " + fetchData.fetchAllSigmet());
    }
}
