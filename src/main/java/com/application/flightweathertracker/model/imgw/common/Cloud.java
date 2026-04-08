package com.application.flightweathertracker.model.imgw.common;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Cloud(String quantity,
                    Integer height) {
}
