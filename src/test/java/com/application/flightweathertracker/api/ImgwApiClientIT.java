package com.application.flightweathertracker.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ImgwApiClientIT {

    @Autowired
    private ImgwApiClient imgwApiClient;

    @Test
    void fetchMetar_returnsNonEmptyJsonResponse() {
        String result = imgwApiClient.fetchAllMetar();

        assertThat(result).isNotBlank();
        assertThat(result).startsWith("{");
    }
    @Test
    void fetchFromConfig() {
        System.out.println("Metars: " + imgwApiClient.fetchMetarsForAirportsConfig()
                + "\nTafs: " + imgwApiClient.fetchTafsForAirportsConfig()
                            + "\nSigmets: " + imgwApiClient.fetchAllSigmet());
    }
}
