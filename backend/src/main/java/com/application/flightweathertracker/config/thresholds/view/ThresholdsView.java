package com.application.flightweathertracker.config.thresholds.view;

public record ThresholdsView(
        MetarThresholdsView metar,
        TafThresholdsView taf,
        SigmetThresholdsView sigmet
) {
}