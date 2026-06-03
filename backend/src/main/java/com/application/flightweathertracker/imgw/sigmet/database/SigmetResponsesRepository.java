package com.application.flightweathertracker.imgw.sigmet.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.List;

public interface SigmetResponsesRepository extends JpaRepository<SigmetResponses, Long> {
    List<SigmetResponses> findAllByOrderByFetchedAtDesc();

    @Query("SELECT s FROM SigmetResponses s WHERE s.valid_to > :now")
    List<SigmetResponses> findAllActive(@Param("now") Instant now);
}
