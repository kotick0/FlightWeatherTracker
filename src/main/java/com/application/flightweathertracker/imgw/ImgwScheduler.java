package com.application.flightweathertracker.imgw;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class ImgwScheduler {
    private final ImgwService imgwService;

    @Scheduled(fixedRate = 2700000)
    public void saveImgwResponsesScheduler() {
        imgwService.saveAllImgwResponsesForAirportsConfig();
    }
}
