package com.application.flightweathertracker.config.thresholds.metar;

import java.util.List;

public record MetarThresholdsView(
        double minVisibility,
        int minCloudHeight,
        String maxCloudQuantity,
        int minAltimeter,
        int maxTemperature,
        int maxWindSpeed,
        int maxGustSpeed,
        String maxWeatherIntensity,
        boolean windShear,
        List<String> cancellingPhenomenon,
        List<String> operationallySignificantPhenomena
) {}
