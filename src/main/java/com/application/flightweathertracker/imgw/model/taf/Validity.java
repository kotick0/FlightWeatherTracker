package com.application.flightweathertracker.imgw.model.taf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Validity(int endHour,
                       int startDay,
                       int startHour,
                       int endDay) {
}
