package com.application.flightweathertracker.config.thresholds;

import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsService;
import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsService;
import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;


@Slf4j
@RequiredArgsConstructor
@Component
public class ThresholdsService {
    private final MetarThresholdsService metarThresholdsService;
    private final SigmetThresholdsService sigmetThresholdsService;
    private final TafThresholdsService tafThresholdsService;

    public void initializeThresholds() {
        metarThresholdsService.initializeMetarThresholds();
        sigmetThresholdsService.initializeSigmetThresholds();
        tafThresholdsService.initializeTafThresholds();
    }
}
