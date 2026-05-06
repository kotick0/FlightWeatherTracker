package com.application.flightweathertracker.config.thresholds.model;

import com.application.flightweathertracker.config.thresholds.model.metar.MetarThresholds;
import com.application.flightweathertracker.config.thresholds.model.sigmet.SigmetThresholds;
import com.application.flightweathertracker.config.thresholds.model.taf.TafThresholds;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ThresholdsConfig(MetarThresholds metar,
                               TafThresholds taf,
                               SigmetThresholds sigmet) {
}
