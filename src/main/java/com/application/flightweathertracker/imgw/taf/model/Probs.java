package com.application.flightweathertracker.imgw.taf.model;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.Visibility;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Probs(Boolean cavok,
                    Visibility visibility,
                    Integer probability,
                    Validity validity,
                    String type,
                    List<Cloud> clouds,
                    List<WeatherCondition> weatherConditions
                    //TODO: TODO: Dodać "turbulence" i "icings" kiedy się pojawią
) {
}
