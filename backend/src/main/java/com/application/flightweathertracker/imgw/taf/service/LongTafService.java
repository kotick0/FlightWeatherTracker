package com.application.flightweathertracker.imgw.taf.service;

import com.application.flightweathertracker.imgw.taf.database.long_term.LongTafResponsesRepository;
import com.application.flightweathertracker.imgw.taf.mapper.LongTafMapper;
import com.application.flightweathertracker.imgw.taf.view.TafView;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static com.application.flightweathertracker.api.ReportQuerySupport.*;

@Service
public class LongTafService {
    private final LongTafResponsesRepository repository;
    private final LongTafMapper mapper;

    public LongTafService(LongTafResponsesRepository repository, LongTafMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public List<TafView> getAll() {
        return repository.findAllByOrderByObservedAtDesc()
                .stream().map(mapper::map).toList();
    }

    public List<TafView> getFiltered(List<String> icaos, int hours) {
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
