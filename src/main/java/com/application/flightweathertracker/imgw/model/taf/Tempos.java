package com.application.flightweathertracker.imgw.model.taf;

import com.application.flightweathertracker.imgw.model.common.Cloud;
import com.application.flightweathertracker.imgw.model.common.WeatherCondition;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Tempos(boolean cavok,
                     //TODO: Dodać "turbulences" i "icings" kiedy się pojawi
                     int probability,
                     Validity validity,
                     Cloud clouds,
                     String type,
                     WeatherCondition weatherConditions
) {
}
