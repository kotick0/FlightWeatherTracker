package com.application.flightweathertracker.config.thresholds.sigmet;

import com.application.flightweathertracker.config.thresholds.sigmet.database.SigmetThresholds;
import com.application.flightweathertracker.config.thresholds.sigmet.database.SigmetThresholdsRepository;
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

public class SigmetThresholdsInitializer {
    @Value("${thresholds.config.path}")
    private String thresholdsConfigPathString;

    private final SigmetThresholdsRepository sigmetThresholdsRepository;
    private final ObjectMapper objectMapper;

    public void initializeSigmetThresholds() {
        if (!sigmetThresholdsRepository.existsByIdNotNull()) {
            try {
                String thresholdsJson = Files.readString(Path.of(thresholdsConfigPathString));
                JsonNode sigmetRoot = objectMapper.readTree(thresholdsJson).get("sigmet");

                saveSigmetThresholdsToDatabase(sigmetRoot);
                log.info("SIGMET thresholds config loaded successfully from '{}'", thresholdsConfigPathString);
            } catch (IOException e) {
                log.error("Failed to read SIGMET thresholds config from '{}': {}", thresholdsConfigPathString, e.getMessage(), e);
                throw new RuntimeException("Failed to read SIGMET thresholds config from: " + thresholdsConfigPathString, e);
            }
        }
    }

    private void saveSigmetThresholdsToDatabase(JsonNode sigmetRoot) {
        SigmetThresholds sigmetRecord = SigmetThresholds.builder()
                .minFlightLevel(sigmetRoot.get("minFlightLevel").asInt())
                .maxFlightLevel(sigmetRoot.get("maxFlightLevel").asInt())
                .maxIntensity(sigmetRoot.get("maxIntensity").asString())
                .wmoOperationallySignificant(objectMapper.convertValue(
                        sigmetRoot.get("wmoOperationallySignificant"),
                        new TypeReference<>() {}
                ))
                .wmoCancelling(objectMapper.convertValue(
                        sigmetRoot.get("wmoCancelling"),
                        new TypeReference<>() {}
                ))
                .phenomenaOperationallySignificant(objectMapper.convertValue(
                        sigmetRoot.get("phenomenaOperationallySignificant"),
                        new TypeReference<>() {}
                ))
                .phenomenaCancelling(objectMapper.convertValue(
                        sigmetRoot.get("phenomenaCancelling"),
                        new TypeReference<>() {}
                ))
                .build();
                sigmetThresholdsRepository.save(sigmetRecord);
    }
}
