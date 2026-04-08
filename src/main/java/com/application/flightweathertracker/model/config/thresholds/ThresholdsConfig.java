package com.application.flightweathertracker.model.config.thresholds;

import com.application.flightweathertracker.model.config.thresholds.metar.MetarThresholds;
import com.application.flightweathertracker.model.config.thresholds.sigmet.SigmetThresholds;
import com.application.flightweathertracker.model.config.thresholds.taf.TafThresholds;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ThresholdsConfig(MetarThresholds metar,
                               TafThresholds taf,
                               SigmetThresholds sigmet) {
}
