package com.application.flightweathertracker.config.airports.service;

import com.application.flightweathertracker.config.airports.database.AirportsRepository;
import com.application.flightweathertracker.config.airports.database.Airports;
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

    public AirportView create(AirportView view) {
        Airports entity = Airports.builder()
                .name(view.name())
                .icao(view.icao())
                .city(view.city())
                .latitude(view.latitude())
                .longitude(view.longitude())
                .isMILITARY(view.isMilitary())
                .dangerFactor(view.dangerFactor())
                .build();
        Airports saved = repository.save(entity);
        return mapper.map(saved);
    }

    public AirportView update(Long id, AirportView view) {
        Airports entity = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Airport not found with id: " + id));
        entity.setName(view.name());
        entity.setIcao(view.icao());
        entity.setCity(view.city());
        entity.setLatitude(view.latitude());
        entity.setLongitude(view.longitude());
        entity.setMILITARY(view.isMilitary());
        Airports saved = repository.save(entity);
        return mapper.map(saved);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public void saveDangerFactor(String icao, int dangerFactor) {
        Airports entity = repository.findByIcao(icao)
                .orElseThrow(() -> new RuntimeException("Airport not found with icao: " + icao));
        entity.setDangerFactor(dangerFactor);
        repository.save(entity);
    }
}