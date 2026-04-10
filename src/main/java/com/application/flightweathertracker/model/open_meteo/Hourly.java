package com.application.flightweathertracker.model.open_meteo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Hourly(List<LocalDateTime> time,
                     List<Double> temperature_2m,
                     List<Double> dew_point_2m,
                     List<Double> wind_speed_10m,
                     List<Integer> wind_direction_10m,
                     List<Double> wind_gusts_10m,
                     List<Double> visibility,
                     List<Integer> cloud_cover_low,
                     List<Integer> cloud_cover_mid,
                     List<Integer> cloud_cover_high,
                     List<Double> surface_pressure,
                     List<Double> snowfall,
                     List<Double> snow_depth,
                     List<Double> rain,
                     List<Double> showers) {
}
