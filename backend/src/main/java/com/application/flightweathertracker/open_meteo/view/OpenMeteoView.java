package com.application.flightweathertracker.open_meteo.view;

public record OpenMeteoView(
        Long id,
        String fetchedAt,
        Double latitude,
        Double longitude,
        String timezone,
        CurrentUnitsView currentUnits,
        CurrentView current,
        HourlyUnitsView hourlyUnits,
        HourlyView hourly
) {
}
