package com.application.flightweathertracker.model.open_meteo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record HourlyUnits(String time,
                          String temperature_2m,
                          String dew_point_2m,
                          String wind_speed_10m,
                          String wind_direction_10m,
                          String wind_gusts_10m,
                          String visibility,
                          String cloud_cover_low,
                          String cloud_cover_mid,
                          String cloud_cover_high,
                          String surface_pressure,
                          String snowfall,
                          String snow_depth,
                          String rain,
                          String showers
) {
}
