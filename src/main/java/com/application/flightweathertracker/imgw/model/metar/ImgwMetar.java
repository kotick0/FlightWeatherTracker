package com.application.flightweathertracker.imgw.model.metar;

import com.application.flightweathertracker.imgw.model.common.Cloud;
import com.application.flightweathertracker.imgw.model.common.Visibility;
import com.application.flightweathertracker.imgw.model.common.WeatherCondition;
import com.application.flightweathertracker.imgw.model.common.Wind;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImgwMetar(String station,
                        LocalDateTime date,
                        LocalTime time,
                        String message,
                        int temperature,
                        int dewPoint,
                        int altimeter,
                        boolean isCAVOK,
                        @JsonProperty("isCanceled")
                        boolean isCancelled,
                        boolean isCorrected,
                        Wind wind,
                        Visibility visibility,
                        List<Cloud> cloud,
                        List<WeatherCondition> weatherCondition
) {
}
