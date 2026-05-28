package com.application.flightweathertracker.config.thresholds.metar;

import java.util.List;

public record MetarThresholdsView(
        Double minVisibility,
        Integer minCloudHeight,
        String maxCloudQuantity,
        Integer minAltimeter,
        Integer maxTemperature,
        Integer maxWindSpeed,
        Integer maxGustSpeed,
        String maxWeatherIntensity,
        Boolean windShear,
        List<String> cancellingPhenomenon,
        List<String> operationallySignificantPhenomena
) {}
