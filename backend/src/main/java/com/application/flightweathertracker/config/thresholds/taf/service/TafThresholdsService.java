package com.application.flightweathertracker.config.thresholds.taf.service;

import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsView;
import com.application.flightweathertracker.config.thresholds.taf.databsase.TafThresholdsRepository;
import com.application.flightweathertracker.config.thresholds.taf.mapper.TafThresholdsMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TafThresholdsService {
    private final TafThresholdsRepository tafThresholdsRepository;
    private final TafThresholdsMapper mapper;

    public Optional<TafThresholdsView> get() {
        return tafThresholdsRepository.findAll()
                .stream()
                .findFirst()
                .map(mapper::map);
    }

    public Optional<TafThresholdsView> update(TafThresholdsView view) {
        return tafThresholdsRepository.findAll()
                .stream()
                .findFirst()
                .map(existing -> {
                    existing.setMinVisibility(view.minVisibility());
                    existing.setMinCloudHeight(view.minCloudHeight());
                    existing.setMaxCloudQuantity(view.maxCloudQuantity());
                    existing.setCancellingCloudType(view.cancellingCloudType());
                    existing.setMaxWindSpeed(view.maxWindSpeed());
                    existing.setMaxGustSpeed(view.maxGustSpeed());
                    existing.setMinTempoProbability(view.minTempoProbability());
                    existing.setCancellingPhenomenon(view.cancellingPhenomenon());
                    existing.setOperationallySignificantPhenomena(view.operationallySignificantPhenomena());
                    return mapper.map(tafThresholdsRepository.save(existing));
                });
    }
}
