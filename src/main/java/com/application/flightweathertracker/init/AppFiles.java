package com.application.flightweathertracker.init;


import com.application.flightweathertracker.api.ImgwApiClient;
import com.application.flightweathertracker.config.AirportsConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;

@Slf4j
@Component
@RequiredArgsConstructor
public class AppFiles {
    @Value("${api.responses.dir}")
    private String apiResponseDir;

    private final AirportsConfig airportsConfig;
    private final ImgwApiClient imgwApiClient;

    public void createAllFiles() {
        createAirportsConfig();
        createResponses();
    }

    private void createAirportsConfig() {
        if (airportsConfig.configNotExists()) {
            airportsConfig.saveDefaultAirportsConfig(imgwApiClient.fetchAllMetar());
            log.info("Created airports config file");
        }
    }

    private void createResponses() {
        if (Files.notExists(Path.of(apiResponseDir + "metar_response.json"))) {
            imgwApiClient.saveImgwResponse(imgwApiClient.fetchMetarsForAirportsConfig(), "metar_response.json");
        }
        if (Files.notExists(Path.of(apiResponseDir + "taf_response.json"))) {
            imgwApiClient.saveImgwResponse(imgwApiClient.fetchTafsForAirportsConfig(), "taf_response.json");
        }
        if (Files.notExists(Path.of(apiResponseDir + "sigmet_response.json"))) {
            imgwApiClient.saveImgwResponse(imgwApiClient.fetchAllSigmet(), "sigmet_response.json");
        }
    }
}
