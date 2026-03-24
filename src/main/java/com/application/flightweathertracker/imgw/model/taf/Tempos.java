package com.application.flightweathertracker.imgw.model.taf;

import com.application.flightweathertracker.imgw.model.common.Cloud;
import com.application.flightweathertracker.imgw.model.common.WeatherCondition;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Tempos(Boolean cavok,
                     Integer probability,
                     Validity validity,
                     String type,
                     List<Cloud> clouds,
                     List<WeatherCondition> weatherConditions
                     //TODO: Dodać "turbulences" i "icings" kiedy się pojawi
) {
}
