package com.application.flightweathertracker.imgw.model.taf;

import com.application.flightweathertracker.imgw.model.common.Cloud;
import com.application.flightweathertracker.imgw.model.common.Visibility;
import com.application.flightweathertracker.imgw.model.common.WeatherCondition;
import com.application.flightweathertracker.imgw.model.common.Wind;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImgwTaf(String station,
                      LocalDateTime date,
                      LocalTime time,
                      String message,
                      Boolean isCAVOK,
                      Boolean isCancelled,
                      Boolean isCorrected,
                      Wind wind,
                      Visibility visibility,
                      List<Cloud> clouds,
                      List<WeatherCondition> weatherConditions,
                      Validity validity,
                      List<Tempos> tempos,
                      List<Probs> probs,
                      List<Becmg> BECMGs
                      // TODO: Dodać "turbulence" i "icings" kiedy się pojawią

) {
}
