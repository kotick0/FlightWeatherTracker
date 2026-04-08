package com.application.flightweathertracker.model.imgw.metar;

import com.application.flightweathertracker.model.imgw.common.Cloud;
import com.application.flightweathertracker.model.imgw.common.Visibility;
import com.application.flightweathertracker.model.imgw.common.WeatherCondition;
import com.application.flightweathertracker.model.imgw.common.Wind;
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
                        Integer temperature,
                        Integer dewPoint,
                        Integer altimeter,
                        Boolean isCAVOK,
                        @JsonProperty("isCanceled")
                        Boolean isCancelled,
                        Boolean isCorrected,
                        Wind wind,
                        Visibility visibility,
                        List<Cloud> cloud,
                        List<WeatherCondition> weatherCondition
) {
}
