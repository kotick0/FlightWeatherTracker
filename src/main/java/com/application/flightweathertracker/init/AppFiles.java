package com.application.flightweathertracker.init;


import com.application.flightweathertracker.imgw.ImgwApiClient;
import com.application.flightweathertracker.config.AirportsConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class AppFiles {

    private final AirportsConfig airportsConfig;
    private final ImgwApiClient imgwApiClient;

    public void createAllFiles() {
        createAirportsConfig();
    }

    private void createAirportsConfig() {
        if (airportsConfig.configNotExists()) {
            airportsConfig.saveDefaultAirportsConfig(imgwApiClient.fetchAllMetar());
            log.info("Created airports config file");
        }
    }
}
