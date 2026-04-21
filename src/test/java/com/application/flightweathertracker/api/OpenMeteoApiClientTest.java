package com.application.flightweathertracker.api;

import com.application.flightweathertracker.app.JsonDeserializer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import tools.jackson.databind.ObjectMapper;

@SpringBootTest
public class OpenMeteoApiClientTest {
    @Autowired
    private OpenMeteoApiClient openMeteoApiClient;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    JsonDeserializer jsonDeserializer;

    @Test
    public void deserializeOpenMeteoData() {
        String jsonResponse = openMeteoApiClient.fetchAndSaveOpenMeteoData(53.584400177, 21.0977993011);
        System.out.println(jsonResponse);
    }
}
