package com.application.flightweathertracker.config.airports.view;

public record AirportView(
        Long id,
        String name,
        String icao,
        String city,
        double latitude,
        double longitude,
        boolean isMilitary,
        Integer dangerFactor
) {
}
