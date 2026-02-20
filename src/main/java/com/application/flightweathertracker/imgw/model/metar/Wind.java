package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Wind(String unit,
                   String direction,
                   Integer directionDegrees,
                   Integer speed) {
}
