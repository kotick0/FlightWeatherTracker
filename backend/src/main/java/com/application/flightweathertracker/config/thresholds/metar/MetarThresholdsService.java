package com.application.flightweathertracker.config.thresholds.metar;

import com.application.flightweathertracker.config.thresholds.metar.database.MetarThresholds;
import com.application.flightweathertracker.config.thresholds.metar.database.MetarThresholdsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Slf4j
@RequiredArgsConstructor
@Component
public class MetarThresholdsService {
    @Value("${thresholds.config.path}")
    private String thresholdsConfigPathString;

    private final MetarThresholdsRepository metarThresholdsRepository;
    private final ObjectMapper objectMapper;

    public void initializeMetarThresholds() {
        if (!metarThresholdsRepository.existsByIdNotNull()) {
            try {
                String thresholdsJson = Files.readString(Path.of(thresholdsConfigPathString));
                JsonNode metarRoot = objectMapper.readTree(thresholdsJson).get("metar");

                saveMetarThresholdsToDatabase(metarRoot);
                log.info("METAR thresholds config loaded successfully from '{}'", thresholdsConfigPathString);
            } catch (IOException e) {
                log.error("Failed to read METAR thresholds config from '{}': {}", thresholdsConfigPathString, e.getMessage(), e);
                throw new RuntimeException("Failed to read METAR thresholds config from: " + thresholdsConfigPathString, e);
            }
        }
    }

    private void saveMetarThresholdsToDatabase(JsonNode metarRoot) {
        MetarThresholds metarRecord = MetarThresholds.builder()
                .minVisibility(metarRoot.get("minVisibility").asDouble())
                .minCloudHeight(metarRoot.get("minCloudHeight").asInt())
                .maxCloudQuantity(metarRoot.get("maxCloudQuantity").asString())
                .minAltimeter(metarRoot.get("minAltimeter").asInt())
                .maxTemperature(metarRoot.get("maxTemperature").asInt())
                .maxWindSpeed(metarRoot.get("maxWindSpeed").asInt())
                .maxGustSpeed(metarRoot.get("maxGustSpeed").asInt())
                .maxWeatherIntensity(metarRoot.get("maxWeatherIntensity").asString())
                .windShear(metarRoot.get("windShear").asBoolean())
                .cancellingPhenomenon(objectMapper.convertValue(
                        metarRoot.get("cancellingPhenomenon"),
                        new TypeReference<>() {}
                ))
                .operationallySignificantPhenomena(objectMapper.convertValue(
                        metarRoot.get("operationallySignificantPhenomena"),
                        new TypeReference<>() {}
                ))
                .build();
                metarThresholdsRepository.save(metarRecord);
    }
}