package com.application.flightweathertracker.config.airports.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AirportsRepository extends JpaRepository<Airports, Long> {
    boolean existsByIdNotNull();
    @Query("SELECT DISTINCT e.icao FROM Airports e")
    List<String> findAllDistinctIcaoCodes();

    Optional<Airports> findByIcao(String icao);
}
