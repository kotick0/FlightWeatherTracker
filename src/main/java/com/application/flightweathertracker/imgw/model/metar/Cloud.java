package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Cloud(String quantity,
                    Integer height) {
}
