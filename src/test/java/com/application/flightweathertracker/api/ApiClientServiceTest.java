package com.application.flightweathertracker.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ApiClientServiceTest {
    @Value("${api.responses.dir}")
    String apiResponsesDir;

    @Autowired
    ApiClientService apiClientService;

    @Test
    public void fetchDataServiceTest(){
        apiClientService.fetchAndSaveImgwData();
    }
}
