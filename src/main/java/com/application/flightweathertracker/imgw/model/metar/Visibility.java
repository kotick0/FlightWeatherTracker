package com.application.flightweathertracker.imgw.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Visibility(String unit,
                         @JsonProperty("mainVisibiity")
                         String mainVisibility,
                         Integer value) {
}
