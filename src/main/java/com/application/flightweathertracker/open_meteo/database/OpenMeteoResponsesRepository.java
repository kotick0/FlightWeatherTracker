package com.application.flightweathertracker.open_meteo.database;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OpenMeteoResponsesRepository extends JpaRepository<OpenMeteoResponsesTable, Long> {
}
