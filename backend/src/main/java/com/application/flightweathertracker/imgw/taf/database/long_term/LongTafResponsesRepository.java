package com.application.flightweathertracker.imgw.taf.database.long_term;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface LongTafResponsesRepository extends JpaRepository<LongTafResponsesTable, Long> {
    List<LongTafResponsesTable> findAllByStation(String station);

    List<LongTafResponsesTable> findByObservedAtAfter(LocalDateTime observedAt);

    List<LongTafResponsesTable> findAllByOrderByObservedAtDesc();
}
