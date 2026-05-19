package com.application.flightweathertracker.imgw.sigmet.model;

import com.application.flightweathertracker.imgw.sigmet.FeatureCollectionDeserializer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import tools.jackson.databind.annotation.JsonDeserialize;

import java.time.Instant;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ImgwSigmet(String TT,
                         String AA,
                         String ii,
                         Boolean is_cnl,
                         String BBB,
                         Integer YYGGgg,
                         Instant valid_from,
                         String cnl_id,
                         String message,
                         @JsonDeserialize(using = FeatureCollectionDeserializer.class)
                         FeatureCollection geojson,
                         Instant Transmission_time,
                         Instant valid_to,
                         Boolean is_valid,
                         String id,
                         String cnl_valid,
                         String CCCC

) {
}
