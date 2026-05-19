package com.application.flightweathertracker.imgw.metar.database;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface MetarResponsesRepository extends JpaRepository<MetarResponsesTable, Long> {
    List<MetarResponsesTable> findAllByStation(String station);
    List<MetarResponsesTable> findByObservedAtAfter(LocalDateTime observedAt);
}
