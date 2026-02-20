package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImgwMetar { // TODO change into records
    private String station, message, time; // TODO w osobnych linijkach
    private int temperature, dewPoint, altimeter;
    private boolean isCAVOK, isCanceled, isCorrected;
    private Wind wind;
    private Visibility visibility;
    private List<Cloud> cloud;
    private List<WeatherCondition> weatherCondition;
}
