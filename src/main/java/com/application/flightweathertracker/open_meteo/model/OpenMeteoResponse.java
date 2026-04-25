package com.application.flightweathertracker.open_meteo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record OpenMeteoResponse(Double latitude,
                                Double longitude,
                                String timezone,
                                CurrentUnits current_units,
                                Current current,
                                HourlyUnits hourly_units,
                                Hourly hourly
) {
}
