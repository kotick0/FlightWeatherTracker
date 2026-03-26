package com.application.flightweathertracker.imgw.model.sigmet;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
                         FeatureCollection geojson,
                         Instant Transmission_time,
                         Instant valid_to,
                         Boolean is_valid,
                         String id,
                         Boolean cnl_valid,
                         String CCCC

) {
}
