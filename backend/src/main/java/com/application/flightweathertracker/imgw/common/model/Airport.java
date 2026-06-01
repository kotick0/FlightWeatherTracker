package com.application.flightweathertracker.imgw.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Airport(String name,
                      String icao,
                      String city,
                      double latitude,
                      double longitude,
                      boolean isMILITARY,
                      Integer dangerFactor
) {
}
