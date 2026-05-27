package com.application.flightweathertracker.config.thresholds.sigmet.database;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SigmetThresholdsRepository extends JpaRepository<SigmetThresholds, Long> {
    boolean existsByIdNotNull();
}
