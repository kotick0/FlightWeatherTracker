package com.application.flightweathertracker.imgw.common.view;

public record WindView(
        String unit,
        String direction,
        Integer directionDegrees,
        Integer speed
) {
}
