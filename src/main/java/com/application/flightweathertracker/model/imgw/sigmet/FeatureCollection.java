package com.application.flightweathertracker.model.imgw.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record FeatureCollection(String type,
                                List<Feature> features
) {
}
