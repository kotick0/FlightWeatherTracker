package com.application.flightweathertracker.imgw.common.view;

public record CloudView(
        String quantity,
        String type,
        Integer height,
        String formatted
) {
}