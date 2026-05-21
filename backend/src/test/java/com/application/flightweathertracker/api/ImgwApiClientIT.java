package com.application.flightweathertracker.api;

import com.application.flightweathertracker.imgw.ImgwApiClient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ImgwApiClientIT {

    @Value("${api.imgw.metar.taf}")
    String imgwMetarTaf;

    @Autowired
    private ImgwApiClient imgwApiClient;

    @Test
    void fetchMetar_returnsNonEmptyJsonResponse() {
        String result = imgwApiClient.fetchAllMetar();

        assertThat(result).isNotBlank();
        assertThat(result).startsWith("{");
    }
//    @Test
//    void fetchFromConfig() {
//        System.out.println(imgwApiClient.fetchDataPerAirport(imgwMetarTaf));
//    }
}
