package com.application.flightweathertracker.imgw.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record WeatherCondition(String intensity,
                               List<String> phenomenons,
                               Boolean valid) {
}
