package com.application.flightweathertracker.open_meteo.service;

import com.application.flightweathertracker.open_meteo.database.OpenMeteoResponsesRepository;
import com.application.flightweathertracker.open_meteo.mapper.OpenMeteoMapper;
import com.application.flightweathertracker.open_meteo.view.OpenMeteoView;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OpenMeteoService {
    private final OpenMeteoResponsesRepository repository;
    private final OpenMeteoMapper mapper;

    public OpenMeteoService(OpenMeteoResponsesRepository repository, OpenMeteoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public Optional<OpenMeteoView> getLatest() {
        return repository.findTopByOrderByFetchedAtDesc().map(mapper::map);
    }
}
