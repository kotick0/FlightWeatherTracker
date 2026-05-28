package com.application.flightweathertracker.config.thresholds;

import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsInitializer;
import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsInitializer;
import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsInitializer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;


@Slf4j
@RequiredArgsConstructor
@Component
public class ThresholdsInitializer {
    private final MetarThresholdsInitializer metarThresholdsInitializer;
    private final SigmetThresholdsInitializer sigmetThresholdsInitializer;
    private final TafThresholdsInitializer tafThresholdsInitializer;

    public void initializeThresholds() {
        metarThresholdsInitializer.initializeMetarThresholds();
        sigmetThresholdsInitializer.initializeSigmetThresholds();
        tafThresholdsInitializer.initializeTafThresholds();
    }
}
