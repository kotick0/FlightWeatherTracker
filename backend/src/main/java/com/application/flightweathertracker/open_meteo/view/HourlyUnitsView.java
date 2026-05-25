package com.application.flightweathertracker.open_meteo.view;


public record HourlyUnitsView(
        String time,
        String temperature2m,
        String dewPoint2m,
        String windSpeed10m,
        String windDirection10m,
        String windGusts10m,
        String visibility,
        String cloudCoverLow,
        String cloudCoverMid,
        String cloudCoverHigh,
        String surfacePressure,
        String snowfall,
        String snowDepth,
        String rain,
        String showers
) {
}
