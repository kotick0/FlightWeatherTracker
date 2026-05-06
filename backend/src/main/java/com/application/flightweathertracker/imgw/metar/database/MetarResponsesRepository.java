package com.application.flightweathertracker.imgw.metar.database;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MetarResponsesRepository extends JpaRepository<MetarResponsesTable, Long> {
}
