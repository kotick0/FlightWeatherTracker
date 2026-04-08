package com.application.flightweathertracker.model.config.thresholds.taf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record TafThresholds() {
}
