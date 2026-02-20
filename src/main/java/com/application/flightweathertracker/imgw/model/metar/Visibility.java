package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Visibility(String unit,
                         String mainVisibiity,
                         Integer value) {
}
