package com.application.flightweathertracker.imgw.model.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Feature(String type,
                      Geometry geometry,
                      Properties properties
) {
}
