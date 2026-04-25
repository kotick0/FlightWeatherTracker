package com.application.flightweathertracker.imgw.sigmet.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Geometry(String type,
                       List<List<List<Double>>> coordinates
) {
}
