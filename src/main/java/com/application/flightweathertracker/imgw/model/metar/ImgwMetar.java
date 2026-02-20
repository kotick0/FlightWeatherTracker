package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImgwMetar(String station,
                        LocalDateTime date,
                        String time,
                        String message,
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
