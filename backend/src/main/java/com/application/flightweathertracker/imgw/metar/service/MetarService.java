package com.application.flightweathertracker.imgw.metar.service;

import com.application.flightweathertracker.imgw.metar.database.MetarResponsesRepository;
import com.application.flightweathertracker.imgw.metar.mapper.MetarMapper;
import com.application.flightweathertracker.imgw.metar.view.MetarView;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static com.application.flightweathertracker.api.ReportQuerySupport.*;

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

    public List<MetarView> getFiltered(List<String> icaos, int hours) {
        List<String> stations = normalizeIcaos(icaos);
        if (!hasIcaoFilter(stations)) {
            return List.of();
        }
        LocalDateTime cutoff = fetchedAfter(hours);
        return repository.findFilteredByStationsAndFetchedAt(stations, cutoff)
                .stream()
                .map(mapper::map)
                .toList();
    }
}