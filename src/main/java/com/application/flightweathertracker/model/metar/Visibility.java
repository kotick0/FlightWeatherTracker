package com.application.flightweathertracker.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Visibility(String unit, String mainVisibiity, int value) {
}
