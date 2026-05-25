package com.application.flightweathertracker.imgw.metar.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface MetarResponsesRepository extends JpaRepository<MetarResponsesTable, Long> {
    List<MetarResponsesTable> findAllByStation(String station);
    List<MetarResponsesTable> findByObservedAtAfter(LocalDateTime observedAt);

    List<MetarResponsesTable> findAllByOrderByObservedAtDesc();

    @Query("""
            SELECT m FROM MetarResponsesTable m
            WHERE m.station IN :stations AND m.fetchedAt >= :fetchedAfter
            ORDER BY m.fetchedAt DESC
            """)
    List<MetarResponsesTable> findFilteredByStationsAndFetchedAt(
            @Param("stations") List<String> stations,
            @Param("fetchedAfter") LocalDateTime fetchedAfter
    );
}
