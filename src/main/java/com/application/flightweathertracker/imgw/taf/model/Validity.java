package com.application.flightweathertracker.imgw.taf.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Validity(Integer endHour,
                       Integer startDay,
                       Integer startHour,
                       Integer endDay) {
}
