package com.application.flightweathertracker.imgw.model.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Properties(String flight_level,
                         String movement_direction,
                         String phenomenon,
                         String observation_type,
                         String intensity,
                         String phenomenon_description,
                         String valid_str,
                         String movement
) {
}
