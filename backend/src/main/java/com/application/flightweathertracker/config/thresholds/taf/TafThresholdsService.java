package com.application.flightweathertracker.config.thresholds.taf;

import com.application.flightweathertracker.config.thresholds.taf.databsase.TafThresholds;
import com.application.flightweathertracker.config.thresholds.taf.databsase.TafThresholdsRepository;
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

public class TafThresholdsService {
    @Value("${thresholds.config.path}")
    private String thresholdsConfigPathString;

    private final TafThresholdsRepository tafThresholdsRepository;
    private final ObjectMapper objectMapper;

    public void initializeTafThresholds() {
        if (!tafThresholdsRepository.existsByIdNotNull()) {
            try {
                String thresholdsJson = Files.readString(Path.of(thresholdsConfigPathString));
                JsonNode tafRoot = objectMapper.readTree(thresholdsJson).get("taf");

                saveTafThresholdsToDatabase(tafRoot);
                log.info("TAF thresholds config loaded successfully from '{}'", thresholdsConfigPathString);
            } catch (IOException e) {
                log.error("Failed to read TAF thresholds config from '{}': {}", thresholdsConfigPathString, e.getMessage(), e);
                throw new RuntimeException("Failed to read TAF thresholds config from: " + thresholdsConfigPathString, e);
            }
        }
    }

    private void saveTafThresholdsToDatabase(JsonNode tafRoot) {
        TafThresholds tafRecord = TafThresholds.builder()
                .minVisibility(tafRoot.get("minVisibility").asDouble())
                .minCloudHeight(tafRoot.get("minCloudHeight").asInt())
                .maxCloudQuantity(tafRoot.get("maxCloudQuantity").asString())
                .cancellingCloudType(tafRoot.get("cancellingCloudType").asString())
                .maxWindSpeed(tafRoot.get("maxWindSpeed").asInt())
                .maxGustSpeed(tafRoot.get("minTempoProbability").asInt())
                .minTempoProbability(tafRoot.get("minTempoProbability").asInt())
                .cancellingPhenomenon(objectMapper.convertValue(
                        tafRoot.get("cancellingPhenomenon"),
                        new TypeReference<>() {
                        }
                ))
                .operationallySignificantPhenomena(objectMapper.convertValue(
                        tafRoot.get("operationallySignificantPhenomena"),
                        new TypeReference<>() {
                        }
                ))
                .build();
        tafThresholdsRepository.save(tafRecord);
    }
}
