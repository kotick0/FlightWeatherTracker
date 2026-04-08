package com.application.flightweathertracker.model.config.thresholds.metar;

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
