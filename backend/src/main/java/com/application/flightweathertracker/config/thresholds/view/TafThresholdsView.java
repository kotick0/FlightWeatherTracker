package com.application.flightweathertracker.config.thresholds.view;

import java.util.List;

public record TafThresholdsView(
        double minVisibility,
        int minCloudHeight,
        String maxCloudQuantity,
        String cancellingCloudType,
        int maxWindSpeed,
        int maxGustSpeed,
        int minTempoProbability,
        List<String> cancellingPhenomenon,
        List<String> operationallySignificantPhenomena
) {}