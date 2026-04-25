package com.application.flightweathertracker.open_meteo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Current(LocalDateTime time,
                      Integer interval,
                      Double temperature_2m,
                      Double wind_speed_10m,
                      Integer wind_direction_10m,
                      Double wind_gusts_10m,
                      Double precipitation,
                      Double rain,
                      Double showers,
                      Double snowfall,
                      Integer cloud_cover,
                      Double surface_pressure
) {
}
