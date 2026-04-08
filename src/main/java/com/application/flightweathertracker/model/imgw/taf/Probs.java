package com.application.flightweathertracker.model.imgw.taf;

import com.application.flightweathertracker.model.imgw.common.Cloud;
import com.application.flightweathertracker.model.imgw.common.Visibility;
import com.application.flightweathertracker.model.imgw.common.WeatherCondition;
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
