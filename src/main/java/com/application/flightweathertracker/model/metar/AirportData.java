package com.application.flightweathertracker.model.metar;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AirportData {
    private Metars metars;
    private Airport airport;
}
