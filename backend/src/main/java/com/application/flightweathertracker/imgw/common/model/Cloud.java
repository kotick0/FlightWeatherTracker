package com.application.flightweathertracker.imgw.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Cloud(String quantity,
                    String type,
                    Integer height) {
}
