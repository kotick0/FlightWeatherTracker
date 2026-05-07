package com.application.flightweathertracker.imgw.taf.model;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.application.flightweathertracker.imgw.common.model.Wind;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.databind.JsonNode;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Becmg(Boolean cavok,
                    Validity validity,
                    List<Cloud> clouds,
                    List<WeatherCondition> weatherConditions,
                    String type,
                    Wind wind,
                    @JsonProperty("turbulences")
                    List<JsonNode> turbulence,
                    List<JsonNode> icings
                    // TODO: Zmienić turbulence i icings na modele kiedy się pojawią
) {
}
