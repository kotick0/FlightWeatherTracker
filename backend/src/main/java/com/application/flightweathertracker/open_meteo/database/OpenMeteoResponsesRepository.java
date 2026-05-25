package com.application.flightweathertracker.open_meteo.database;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OpenMeteoResponsesRepository extends JpaRepository<OpenMeteoResponsesTable, Long> {
    Optional<OpenMeteoResponsesTable> findTop1ByLatitudeAndLongitudeOrderByIdDesc(double latitude, double longitude);

    Optional<OpenMeteoResponsesTable> findTopByOrderByFetchedAtDesc();
}
