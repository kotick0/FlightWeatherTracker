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
public class FetchDataService {
    private final FetchData fetchData;

    @Value("${airports.config.path}")
    String airportsConfigPath;

    @Value("${api.responses.path}")
    String apiResponsesPath;

    @Scheduled(fixedRate = 60000) //TODO: 3600000
    public void fetchAndSaveData() {
        String metarResponse = fetchData.fetchConfigAirportsMetar(airportsConfigPath);
        String tafResponse = fetchData.fetchConfigAirportsTaf(airportsConfigPath);
        String sigmetResponse = fetchData.fetchAllSigmet();

        Path metarPath = Paths.get(apiResponsesPath + "metar_response.json");
        Path tafPath = Paths.get(apiResponsesPath + "taf_response.json");
        Path sigmetPath = Paths.get(apiResponsesPath + "sigmet_response.json");

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
