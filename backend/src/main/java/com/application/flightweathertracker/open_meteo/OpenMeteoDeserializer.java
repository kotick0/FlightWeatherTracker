package com.application.flightweathertracker.open_meteo;

import com.application.flightweathertracker.open_meteo.model.OpenMeteoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class OpenMeteoDeserializer {

    private final ObjectMapper objectMapper;

    public OpenMeteoResponse deserializeOpenMeteoResponse(String openMeteoResponseJson) {
        return objectMapper.readValue(openMeteoResponseJson, OpenMeteoResponse.class);
    }
}
