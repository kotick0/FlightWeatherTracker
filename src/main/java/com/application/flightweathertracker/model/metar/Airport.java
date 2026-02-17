package com.application.flightweathertracker.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Airport {
    private String name, icao, iata, city, country, timezone;
    private double latitude, longitude;
    private int altitude;
    private boolean isMILITARY;
}
