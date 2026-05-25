package com.application.flightweathertracker.config.airports.service;

import com.application.flightweathertracker.config.airports.database.AirportsRepository;
import com.application.flightweathertracker.config.airports.mapper.AirportMapper;
import com.application.flightweathertracker.config.airports.view.AirportView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportService {

    private final AirportsRepository repository;
    private final AirportMapper mapper;

    public AirportService(AirportsRepository repository, AirportMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<AirportView> getAll() {
        return repository.findAll()
                .stream()
                .map(mapper::map)
                .toList();
    }
}