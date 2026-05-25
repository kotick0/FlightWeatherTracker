package com.application.flightweathertracker.imgw.taf.service;

import com.application.flightweathertracker.imgw.taf.database.short_term.ShortTafResponsesRepository;
import com.application.flightweathertracker.imgw.taf.mapper.ShortTafMapper;
import com.application.flightweathertracker.imgw.taf.view.TafView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShortTafService {
    private final ShortTafResponsesRepository repository;
    private final ShortTafMapper mapper;

    public ShortTafService(ShortTafResponsesRepository repository, ShortTafMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<TafView> getAll() {
        return repository.findAllByOrderByObservedAtDesc()
                .stream().map(mapper::map).toList();
    }
}
