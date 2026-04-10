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

    @Value("${airports.config.path}")
    String airportsConfigPath;

    @Value("${api.responses.dir}")
    String apiResponsesDir;

    @Scheduled(fixedRate = 2700000)
    public void fetchAndSaveImgwData() {
        String metarResponse = imgwApiClient.fetchConfigAirportsMetar(airportsConfigPath);
        String tafResponse = imgwApiClient.fetchConfigAirportsTaf(airportsConfigPath);
        String sigmetResponse = imgwApiClient.fetchAllSigmet();

        Path metarPath = Paths.get(apiResponsesDir + "metar_response.json");
        Path tafPath = Paths.get(apiResponsesDir + "taf_response.json");
        Path sigmetPath = Paths.get(apiResponsesDir + "sigmet_response.json");

        try {
            Files.writeString(metarPath, metarResponse);
            Files.writeString(tafPath, tafResponse);
            Files.writeString(sigmetPath, sigmetResponse);
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }
}
