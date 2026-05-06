package com.application.flightweathertracker.config.thresholds.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record MetarThresholds(Double minVisibility,
                              Integer minCloudHeight,
                              String maxCloudQuantity,
                              Boolean isWindShear,
                              Integer minTemperature,
                              Integer minAltimeter,
                              Integer maxWindSpeed,
                              Integer maxGust,
                              WeatherPhenomenon weatherPhenomenon,
                              String maxWeatherIntensity
) {
}
