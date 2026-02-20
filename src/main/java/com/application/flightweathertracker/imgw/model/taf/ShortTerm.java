package com.application.flightweathertracker.imgw.model.taf;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public record ShortTerm(
        @JsonProperty("fc")
        List<ImgwTaf> shortTerm
) {
}
