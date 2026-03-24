package com.application.flightweathertracker.imgw.model.taf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Validity(Integer endHour,
                       Integer startDay,
                       Integer startHour,
                       Integer endDay) {
}
