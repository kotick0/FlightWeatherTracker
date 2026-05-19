package com.application.flightweathertracker.imgw.taf.database.short_term;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ShortTafResponsesRepository extends JpaRepository<ShortTafResponsesTable, Long> {
    List<ShortTafResponsesRepository> findAllByStation(String station);
    List<ShortTafResponsesRepository> findByObservedAtAfter(LocalDateTime observedAt);
}
