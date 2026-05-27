package com.application.flightweathertracker.config.thresholds.metar.database;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MetarThresholdsRepository extends JpaRepository<MetarThresholds, Long> {
    boolean existsByIdNotNull();
}
