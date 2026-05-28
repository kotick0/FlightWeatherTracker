package com.application.flightweathertracker.config.thresholds.sigmet.service;

import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsView;
import com.application.flightweathertracker.config.thresholds.sigmet.database.SigmetThresholdsRepository;
import com.application.flightweathertracker.config.thresholds.sigmet.mapper.SigmetThresholdsMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SigmetThresholdsService {
    private final SigmetThresholdsRepository sigmetThresholdsRepository;
    private final SigmetThresholdsMapper mapper;

    public Optional<SigmetThresholdsView> get() {
        return sigmetThresholdsRepository.findAll()
                .stream()
                .findFirst()
                .map(mapper::map);
    }

    public Optional<SigmetThresholdsView> update(SigmetThresholdsView request) {
        return sigmetThresholdsRepository.findAll()
                .stream()
                .findFirst()
                .map(existing -> {
                    existing.setMinFlightLevel(request.minFlightLevel());
                    existing.setMaxFlightLevel(request.maxFlightLevel());
                    existing.setMaxIntensity(request.maxIntensity());
                    existing.setWmoOperationallySignificant(request.wmoOperationallySignificant());
                    existing.setWmoCancelling(request.wmoCancelling());
                    existing.setPhenomenaOperationallySignificant(request.phenomenaOperationallySignificant());
                    existing.setPhenomenaCancelling(request.phenomenaCancelling());
                    return mapper.map(sigmetThresholdsRepository.save(existing));
                });
    }

}
