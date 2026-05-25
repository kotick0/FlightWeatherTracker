package com.application.flightweathertracker.imgw.sigmet.service;

import com.application.flightweathertracker.imgw.sigmet.database.SigmetResponsesRepository;
import com.application.flightweathertracker.imgw.sigmet.mapper.SigmetMapper;
import com.application.flightweathertracker.imgw.sigmet.view.SigmetView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SigmetService {
    private final SigmetResponsesRepository repository;
    private final SigmetMapper mapper;

    public SigmetService(SigmetResponsesRepository repository, SigmetMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<SigmetView> getAll() {
        return repository.findAllByOrderByFetchedAtDesc()
                .stream().map(mapper::map).toList();
    }
}
