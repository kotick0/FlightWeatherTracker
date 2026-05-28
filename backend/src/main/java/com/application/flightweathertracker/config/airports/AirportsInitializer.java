package com.application.flightweathertracker.config.airports;

import com.application.flightweathertracker.config.airports.database.AirportsRepository;
import com.application.flightweathertracker.config.airports.database.Airports;
import com.application.flightweathertracker.imgw.common.model.Airport;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;

@Slf4j
@RequiredArgsConstructor
@Component
public class AirportsInitializer {
    @Value("${airports.config.path}")
    private String airportsConfigPathString;

    private final ObjectMapper objectMapper;

    private final AirportsRepository airportsRepository;

    public void initializeAirports() {
        if (!airportsRepository.existsByIdNotNull()) {
            try {
                String airportsJson = Files.readString(Path.of(airportsConfigPathString));
                HashMap<String, Airport> airports = new HashMap<>();
                JsonNode root = objectMapper.readValue(airportsJson, JsonNode.class);

                root.properties().forEach(entry -> {
                    String icao = entry.getKey();
                    JsonNode airport = entry.getValue();
                    airport.forEach(property -> airports.putIfAbsent(icao, objectMapper.treeToValue(airport, Airport.class)));
                });

                saveAirportsToDatabase(airports);

            } catch (IOException e) {
                log.error("Failed to read airports config from '{}': {}", airportsConfigPathString, e.getMessage(), e);
                throw new RuntimeException("Failed to read airports config from: " + airportsConfigPathString, e);
            }
        }
    }

    private void saveAirportsToDatabase(HashMap<String, Airport> airports) {
        for (Airport airport : airports.values()) {
            Airports airportsRecord = Airports.builder()
                    .name(airport.name())
                    .icao(airport.icao())
                    .city(airport.city())
                    .latitude(airport.latitude())
                    .longitude(airport.longitude())
                    .isMILITARY(airport.isMILITARY())
                    .build();
            airportsRepository.save(airportsRecord);
        }
    }
}
