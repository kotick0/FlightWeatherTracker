package com.application.flightweathertracker.imgw.taf.model;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
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
