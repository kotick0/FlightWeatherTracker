package com.application.flightweathertracker.imgw.taf.database.long_term;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface LongTafResponsesRepository extends JpaRepository<LongTafResponsesTable, Long> {
    List<LongTafResponsesTable> findAllByStation(String station);

    List<LongTafResponsesTable> findByObservedAtAfter(LocalDateTime observedAt);

    List<LongTafResponsesTable> findAllByOrderByObservedAtDesc();

    @Query("""
            SELECT t FROM LongTafResponsesTable t
            WHERE t.station IN :stations AND t.fetchedAt >= :fetchedAfter
            ORDER BY t.fetchedAt DESC
            """)
    List<LongTafResponsesTable> findFilteredByStationsAndFetchedAt(
            @Param("stations") List<String> stations,
            @Param("fetchedAfter") LocalDateTime fetchedAfter
    );
}
