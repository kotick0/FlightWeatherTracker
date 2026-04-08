package com.application.flightweathertracker.model.imgw.taf;

import com.application.flightweathertracker.model.imgw.common.Cloud;
import com.application.flightweathertracker.model.imgw.common.WeatherCondition;
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
