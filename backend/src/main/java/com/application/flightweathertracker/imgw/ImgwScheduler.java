package com.application.flightweathertracker.imgw;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Service
@Slf4j
@EnableScheduling
public class ImgwScheduler {
    private final ImgwService imgwService;

    @Scheduled(fixedRate = 10, timeUnit = TimeUnit.MINUTES)
    public void saveImgwResponsesScheduler() {
        imgwService.saveAllImgwResponsesForAirportsConfig();
    }
}
