package com.application.flightweathertracker.model.imgw.taf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Validity(Integer endHour,
                       Integer startDay,
                       Integer startHour,
                       Integer endDay) {
}
