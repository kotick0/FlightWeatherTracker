package com.application.flightweathertracker.api;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequiredArgsConstructor
@Service
@Slf4j
public class ApiClientService {
    private final ImgwApiClient imgwApiClient;

    @Scheduled(fixedRate = 2700000)
    public void fetchAndSaveImgwData() {
        imgwApiClient.saveImgwData();
    }
}
