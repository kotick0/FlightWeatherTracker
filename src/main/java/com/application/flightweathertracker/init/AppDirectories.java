package com.application.flightweathertracker.init;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
@Component
@RequiredArgsConstructor
public class AppDirectories {

    @Value("${api.responses.dir}")
    private String apiResponsesDir;

    @Value("${airports.config.path}")
    private String airportsConfigPathString;

    public void createAllDirectories() {
        createConfigDirectory();
        createCacheDirectory();
        createOpenMeteoCacheDirectory();
    }

    public void createConfigDirectory() {
        if (Files.notExists(Paths.get(airportsConfigPathString).getParent())) {
            try {
                Files.createDirectory(Path.of(airportsConfigPathString).getParent());
                log.info("Created airports config directory");
            } catch (IOException e) {
                log.error(e.getMessage());
                throw new RuntimeException("Error creating airports config directory");
            }
        }
    }

    private void createCacheDirectory() {
        if (Files.notExists(Paths.get(apiResponsesDir))) {
            try {
                Files.createDirectory(Path.of(apiResponsesDir));
                log.info("Created API responses cache directory");
            } catch (IOException e) {
                log.error(e.getMessage());
                throw new RuntimeException("Error creating API responses cache directory");
            }
        }
    }

    private void createOpenMeteoCacheDirectory() {
        if (Files.notExists(Paths.get(apiResponsesDir + "open-meteo"))) {
            try {
                Files.createDirectory(Path.of(apiResponsesDir + "open-meteo"));
                log.info("Created Open-Meteo API responses cache directory");
            } catch (IOException e) {
                log.error(e.getMessage());
                throw new RuntimeException("Error creating Open-Meteo API responses cache directory");
            }
        }
    }
}