package com.application.flightweathertracker.config.thresholds.metar.service;

import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsView;
import com.application.flightweathertracker.config.thresholds.metar.database.MetarThresholdsRepository;
import com.application.flightweathertracker.config.thresholds.metar.mapper.MetarThresholdsMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class MetarThresholdsService {
    private final MetarThresholdsRepository metarThresholdsRepository;
    private final MetarThresholdsMapper mapper;

    public Optional<MetarThresholdsView> get() {
        return metarThresholdsRepository.findAll()
                .stream()
                .findFirst()
                .map(mapper::map);
    }

    public Optional<MetarThresholdsView> update(MetarThresholdsView request) {
        return metarThresholdsRepository.findAll()
                .stream()
                .findFirst()
                .map(existing -> {
                    existing.setMinVisibility(request.minVisibility());
                    existing.setMinCloudHeight(request.minCloudHeight());
                    existing.setMaxCloudQuantity(request.maxCloudQuantity());
                    existing.setMinAltimeter(request.minAltimeter());
                    existing.setMaxTemperature(request.maxTemperature());
                    existing.setMaxWindSpeed(request.maxWindSpeed());
                    existing.setMaxGustSpeed(request.maxGustSpeed());
                    existing.setMaxWeatherIntensity(request.maxWeatherIntensity());
                    existing.setWindShear(request.windShear());
                    existing.setCancellingPhenomenon(request.cancellingPhenomenon());
                    existing.setOperationallySignificantPhenomena(request.operationallySignificantPhenomena());
                    return mapper.map(metarThresholdsRepository.save(existing));
                });
    }

}
