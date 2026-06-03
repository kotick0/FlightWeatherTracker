package com.application.flightweathertracker.imgw.taf.database.short_term;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ShortTafResponsesRepository extends JpaRepository<ShortTafResponses, Long> {
    List<ShortTafResponses> findAllByOrderByObservedAtDesc();

    @Query("""
            SELECT t FROM ShortTafResponses t
            WHERE t.station IN :stations AND t.fetchedAt >= :fetchedAfter
            ORDER BY t.fetchedAt DESC
            """)
    List<ShortTafResponses> findFilteredByStationsAndFetchedAt(
            @Param("stations") List<String> stations,
            @Param("fetchedAfter") LocalDateTime fetchedAfter
    );

    @Query(value = """
        SELECT * FROM (
            SELECT *, ROW_NUMBER() OVER(PARTITION BY station ORDER BY id DESC) as row_num 
            FROM public.short_taf_responses
        ) ranked_short_tafs
        WHERE ranked_short_tafs.row_num = 1
        """, nativeQuery = true)
    List<ShortTafResponses> findLatestWithDistinctStation();
    boolean existsByStationAndObservedAt(String station, LocalDateTime observedAt);
}
