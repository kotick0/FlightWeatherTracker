package com.application.flightweathertracker.open_meteo.view;

public record CurrentView(
        String time,
        Integer interval,
        Double temperature2m,
        Double windSpeed10m,
        Integer windDirection10m,
        Double windGusts10m,
        Double precipitation,
        Double rain,
        Double showers,
        Double snowfall,
        Integer cloudCover,
        Double surfacePressure
) {
}