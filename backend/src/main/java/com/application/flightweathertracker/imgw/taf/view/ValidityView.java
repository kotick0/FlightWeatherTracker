package com.application.flightweathertracker.imgw.taf.view;

public record ValidityView(
        Integer startDay,
        Integer startHour,
        Integer endDay,
        Integer endHour
) {
}