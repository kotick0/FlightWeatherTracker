package com.application.flightweathertracker.model.open_meteo;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record CurrentUnits(String time,
                           String interval,
                           String temperature_2m,
                           String wind_speed_10m,
                           String wind_direction_10m,
                           String wind_gusts_10m,
                           String precipitation,
                           String rain,
                           String showers,
                           String snowfall,
                           String cloud_cover,
                           String surface_pressure
) {
}
