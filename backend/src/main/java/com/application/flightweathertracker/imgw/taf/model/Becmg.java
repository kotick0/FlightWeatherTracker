package com.application.flightweathertracker.imgw.taf.model;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.application.flightweathertracker.imgw.common.model.Wind;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Becmg(Boolean cavok,
                    Validity validity,
                    List<Cloud> clouds,
                    List<WeatherCondition> weatherConditions,
                    String type,
                    Wind wind
                    //TODO: TODO: Dodać "turbulence" i "icings" kiedy się pojawią
) {
}
