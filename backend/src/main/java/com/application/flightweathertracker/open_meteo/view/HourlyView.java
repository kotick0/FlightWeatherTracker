package com.application.flightweathertracker.open_meteo.view;

import java.util.List;

public record HourlyView(
        List<String> time,
        List<Double> temperature2m,
        List<Double> dewPoint2m,
        List<Double> windSpeed10m,
        List<Integer> windDirection10m,
        List<Double> windGusts10m,
        List<Double> visibility,
        List<Integer> cloudCoverLow,
        List<Integer> cloudCoverMid,
        List<Integer> cloudCoverHigh,
        List<Double> surfacePressure,
        List<Double> snowfall,
        List<Double> snowDepth,
        List<Double> rain,
        List<Double> showers
) {
}
