package com.application.flightweathertracker.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Metar {
    private String station, message, time;
    private int temperature, dewPoint, altimeter;
    private boolean isCAVOK, isCanceled, isCorrected;
    private Wind wind;
    private Visibility visibility;
    private List<Cloud> cloud;
    private List<WeatherCondition> weatherCondition;
}
