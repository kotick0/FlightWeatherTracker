package com.application.flightweathertracker.api;

import com.application.flightweathertracker.imgw.ImgwScheduler;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ImgwSchedulerTest {
    @Autowired
    ImgwScheduler imgwScheduler;

    @Test
    public void fetchDataServiceTest(){
        imgwScheduler.saveImgwResponsesScheduler();
    }
}
