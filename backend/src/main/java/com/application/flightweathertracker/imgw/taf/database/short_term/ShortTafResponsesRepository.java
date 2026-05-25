package com.application.flightweathertracker.imgw.taf.database.short_term;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ShortTafResponsesRepository extends JpaRepository<ShortTafResponsesTable, Long> {
    List<ShortTafResponsesTable> findAllByStation(String station);

    List<ShortTafResponsesTable> findByObservedAtAfter(LocalDateTime observedAt);

    List<ShortTafResponsesTable> findAllByOrderByObservedAtDesc();

    @Query("""
            SELECT t FROM ShortTafResponsesTable t
            WHERE t.station IN :stations AND t.fetchedAt >= :fetchedAfter
            ORDER BY t.fetchedAt DESC
            """)
    List<ShortTafResponsesTable> findFilteredByStationsAndFetchedAt(
            @Param("stations") List<String> stations,
            @Param("fetchedAfter") LocalDateTime fetchedAfter
    );
}
