package com.application.flightweathertracker.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class FetchDataIT {

    @Autowired
    private FetchData fetchData;

    @Test
    void fetchMetar_returnsNonEmptyJsonResponse() {
        String result = fetchData.fetchMetar();

        assertThat(result).isNotBlank();
        assertThat(result).startsWith("{");
    }
}
