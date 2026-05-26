package com.application.flightweathertracker.config.thresholds;

import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsView;
import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsView;
import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsView;

public record ThresholdsView(
        MetarThresholdsView metar,
        TafThresholdsView taf,
        SigmetThresholdsView sigmet
) {
}