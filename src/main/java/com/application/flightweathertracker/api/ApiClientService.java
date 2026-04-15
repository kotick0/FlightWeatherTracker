package com.application.flightweathertracker.api;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class ApiClientService {
    private final ImgwApiClient imgwApiClient;

    @Scheduled(fixedRate = 2700000)
    public void saveImgwCacheService() {
        imgwApiClient.saveAllImgwCache();
    }
}
