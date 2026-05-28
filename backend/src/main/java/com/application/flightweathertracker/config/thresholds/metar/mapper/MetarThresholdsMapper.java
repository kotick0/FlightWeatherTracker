package com.application.flightweathertracker.config.thresholds.metar.mapper;

import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsView;
import com.application.flightweathertracker.config.thresholds.metar.database.MetarThresholds;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MetarThresholdsMapper {
    public MetarThresholdsView map(MetarThresholds e) {
        return new MetarThresholdsView(
                e.getMinVisibility(),
                e.getMinCloudHeight(),
                e.getMaxCloudQuantity(),
                e.getMinAltimeter(),
                e.getMaxTemperature(),
                e.getMaxWindSpeed(),
                e.getMaxGustSpeed(),
                e.getMaxWeatherIntensity(),
                e.getWindShear(),
                e.getCancellingPhenomenon() != null ? e.getCancellingPhenomenon() : List.of(),
                e.getOperationallySignificantPhenomena() != null ? e.getOperationallySignificantPhenomena() : List.of()
        );
    }
}
