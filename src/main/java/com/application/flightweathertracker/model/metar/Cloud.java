package com.application.flightweathertracker.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Cloud(String quantity, int height) {
}
