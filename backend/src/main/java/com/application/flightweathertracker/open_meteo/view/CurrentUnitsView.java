package com.application.flightweathertracker.open_meteo.view;

public record CurrentUnitsView(
        String time,
        String interval,
        String temperature2m,
        String windSpeed10m,
        String windDirection10m,
        String windGusts10m,
        String precipitation,
        String rain,
        String showers,
        String snowfall,
        String cloudCover,
        String surfacePressure
) {
}
