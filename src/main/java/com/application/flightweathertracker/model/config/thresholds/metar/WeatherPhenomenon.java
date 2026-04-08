package com.application.flightweathertracker.model.config.thresholds.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record WeatherPhenomenon(List<String> cancelling,
                                List<String> operationallySignificant
) {
}
