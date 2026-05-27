package com.application.flightweathertracker.config.airports.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AirportsRepository extends JpaRepository<Airports, Long> {
    boolean existsByIdNotNull();
    @Query("SELECT DISTINCT e.icao FROM Airports e")
    List<String> findAllDistinctIcaoCodes();

    Airports findByIcao(String icao);
}
