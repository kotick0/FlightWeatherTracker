package com.application.flightweathertracker.model.imgw.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Feature(String type,
                      Geometry geometry,
                      Properties properties
) {
}
