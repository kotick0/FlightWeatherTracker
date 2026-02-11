package com.application.flightweathertracker.model;

import java.time.LocalDateTime;

public record MetarData(LocalDateTime date, String airportCode, Integer temperature, Integer visibility, int dewPoint, int windSpeed) {
}
