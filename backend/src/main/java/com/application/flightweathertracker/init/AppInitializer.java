package com.application.flightweathertracker.init;

import com.application.flightweathertracker.config.airports.AirportsInitializer;
import com.application.flightweathertracker.config.thresholds.ThresholdsInitializer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jspecify.annotations.NonNull;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class AppInitializer implements ApplicationRunner {

    private final AirportsInitializer airportsInitializer;
    private final ThresholdsInitializer thresholdsInitializer;

    @Override
    public void run(@NonNull ApplicationArguments args) {
        airportsInitializer.initializeAirports();
        thresholdsInitializer.initializeThresholds();
    }
}