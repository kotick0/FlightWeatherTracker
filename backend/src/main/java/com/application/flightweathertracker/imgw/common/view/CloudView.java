package com.application.flightweathertracker.imgw.common.view;

public record CloudView(
        String quantity,
        Integer height,
        String formatted
) {
}