package com.application.flightweathertracker.database;

import com.application.flightweathertracker.imgw.ImgwService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DatabaseSaveTest {
    @Autowired
    private ImgwService imgwService;

    @Test
    public void saveImgwResponsesService() {
        imgwService.saveAllImgwResponsesForAirportsConfig();
    }
}
