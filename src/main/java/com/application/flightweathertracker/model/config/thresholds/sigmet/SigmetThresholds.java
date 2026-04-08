package com.application.flightweathertracker.model.config.thresholds.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SigmetThresholds() {
}
