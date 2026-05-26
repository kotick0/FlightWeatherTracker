package com.application.flightweathertracker.imgw.metar.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface MetarResponsesRepository extends JpaRepository<MetarResponses, Long> {
    List<MetarResponses> findAllByStation(String station);
    List<MetarResponses> findByObservedAtAfter(LocalDateTime observedAt);

    List<MetarResponses> findAllByOrderByObservedAtDesc();

    @Query("""
            SELECT m FROM MetarResponses m
            WHERE m.station IN :stations AND m.fetchedAt >= :fetchedAfter
            ORDER BY m.fetchedAt DESC
            """)
    List<MetarResponses> findFilteredByStationsAndFetchedAt(
            @Param("stations") List<String> stations,
            @Param("fetchedAfter") LocalDateTime fetchedAfter
    );
}
