package com.application.flightweathertracker.imgw.taf.database.short_term;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ShortTafResponsesRepository extends JpaRepository<ShortTafResponsesTable, Long> {
    List<ShortTafResponsesTable> findAllByStation(String station);

    List<ShortTafResponsesTable> findByObservedAtAfter(LocalDateTime observedAt);

    List<ShortTafResponsesTable> findAllByOrderByObservedAtDesc();
}
