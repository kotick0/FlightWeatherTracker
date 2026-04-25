package com.application.flightweathertracker.imgw.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Wind(String unit,
                   String direction,
                   Integer directionDegrees,
                   Integer speed) {
}
