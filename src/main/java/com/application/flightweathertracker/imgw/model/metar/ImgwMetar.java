package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImgwMetar(String station,
                        String message,
                        String time,
                        int temperature,
                        int dewPoint,
                        int altimeter,
                        boolean isCAVOK,
                        boolean isCanceled,
                        boolean isCorrected,
                        Wind wind,
                        Visibility visibility,
                        List<Cloud> cloud,
                        List<WeatherCondition> weatherCondition
) {
}
