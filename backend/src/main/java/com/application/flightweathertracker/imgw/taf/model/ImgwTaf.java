package com.application.flightweathertracker.imgw.taf.model;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.Visibility;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.application.flightweathertracker.imgw.common.model.Wind;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import tools.jackson.databind.JsonNode;

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
                      List<Becmg> BECMGs,
                      List<JsonNode> turbulence,
                      List<JsonNode> icings
                      // TODO: Zmienić turbulence i icings na modele kiedy się pojawią

) {
}
