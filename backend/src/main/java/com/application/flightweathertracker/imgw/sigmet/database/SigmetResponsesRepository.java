package com.application.flightweathertracker.imgw.sigmet.database;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SigmetResponsesRepository extends JpaRepository<SigmetResponsesTable, Long> {
    List<SigmetResponsesTable> findAllByOrderByFetchedAtDesc();

}
