package com.application.flightweathertracker.imgw.metar.service;

import com.application.flightweathertracker.imgw.metar.database.MetarResponsesRepository;
import com.application.flightweathertracker.imgw.metar.mapper.MetarMapper;
import com.application.flightweathertracker.imgw.metar.view.MetarView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetarService {
    private final MetarResponsesRepository repository;
    private final MetarMapper mapper;

    public MetarService(MetarResponsesRepository repository, MetarMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<MetarView> getAll() {
        return repository.findAllByOrderByObservedAtDesc()
                .stream().map(mapper::map).toList();
    }
}