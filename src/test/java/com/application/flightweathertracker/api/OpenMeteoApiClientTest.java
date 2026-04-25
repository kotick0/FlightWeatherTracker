package com.application.flightweathertracker.api;

import com.application.flightweathertracker.open_meteo.OpenMeteoApiClient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class OpenMeteoApiClientTest {
    @Autowired
    private OpenMeteoApiClient openMeteoApiClient;

    @Test
    public void deserializeOpenMeteoData() {
        String jsonResponse = openMeteoApiClient.fetchAndSaveOpenMeteoData(53.584400177, 21.0977993011);
        System.out.println(jsonResponse);
    }
}
