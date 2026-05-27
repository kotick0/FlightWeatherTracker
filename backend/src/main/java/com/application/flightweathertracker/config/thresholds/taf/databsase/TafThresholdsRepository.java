package com.application.flightweathertracker.config.thresholds.taf.databsase;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TafThresholdsRepository extends JpaRepository<TafThresholds, Long> {
    boolean existsByIdNotNull();
}
