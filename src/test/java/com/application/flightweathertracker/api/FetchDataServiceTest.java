package com.application.flightweathertracker.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FetchDataServiceTest {
    @Value("${api.responses.path}")
    String apiResponsesPath;

    @Autowired
    FetchDataService fetchDataService;

    @Test
    public void fetchDataServiceTest(){
        fetchDataService.fetchAndSaveData();
    }
}
