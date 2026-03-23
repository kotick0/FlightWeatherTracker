package com.application.flightweathertracker.imgw.model.taf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public record Tafs(
        ImgwTaf ft,
        ImgwTaf fc
) {
}
