package com.application.flightweathertracker.config.thresholds.sigmet.mapper;

import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsView;
import com.application.flightweathertracker.config.thresholds.sigmet.database.SigmetThresholds;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SigmetThresholdsMapper {
    public SigmetThresholdsView map(SigmetThresholds e) {
        return new SigmetThresholdsView(
                e.getMinFlightLevel(),
                e.getMaxFlightLevel(),
                e.getMaxIntensity(),
                e.getWmoOperationallySignificant() != null ? e.getWmoOperationallySignificant() : List.of(),
                e.getWmoCancelling() != null ? e.getWmoCancelling() : List.of(),
                e.getPhenomenaOperationallySignificant() != null ? e.getPhenomenaOperationallySignificant() : List.of(),
                e.getPhenomenaCancelling() != null ? e.getPhenomenaCancelling() : List.of()
        );
    }
}
