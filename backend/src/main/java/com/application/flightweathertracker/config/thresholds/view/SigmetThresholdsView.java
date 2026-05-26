package com.application.flightweathertracker.config.thresholds.view;

import java.util.List;

public record SigmetThresholdsView(
        int minFlightLevel,
        int maxFlightLevel,
        String maxIntensity,
        List<String> wmoOperationallySignificant,
        List<String> wmoCancelling,
        List<String> phenomenaOperationallySignificant,
        List<String> phenomenaCancelling
) {}