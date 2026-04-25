package com.application.flightweathertracker.config.thresholds.model.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SigmetThresholds() {
}
