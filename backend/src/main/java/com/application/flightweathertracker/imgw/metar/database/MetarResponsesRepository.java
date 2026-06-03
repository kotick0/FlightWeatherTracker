package com.application.flightweathertracker.imgw.metar.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface MetarResponsesRepository extends JpaRepository<MetarResponses, Long> {

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

    @Query(value = """
        SELECT * FROM (
            SELECT *, ROW_NUMBER() OVER(PARTITION BY station ORDER BY id DESC) as row_num 
            FROM metar_responses
        ) ranked_metars 
        WHERE ranked_metars.row_num = 1
        """, nativeQuery = true)
    List<MetarResponses> findLatestWithDistinctStation();
    boolean existsByStationAndObservedAt(String station, LocalDateTime observedAt);
}
