package com.application.flightweathertracker.config.thresholds.taf.mapper;

import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsView;

import com.application.flightweathertracker.config.thresholds.taf.databsase.TafThresholds;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TafThresholdsMapper {
    public TafThresholdsView map(TafThresholds e) {
        return new TafThresholdsView(
                e.getMinVisibility(),
                e.getMinCloudHeight(),
                e.getMaxCloudQuantity(),
                e.getCancellingCloudType(),
                e.getMaxWindSpeed(),
                e.getMaxGustSpeed(),
                e.getMinTempoProbability(),
                e.getCancellingPhenomenon() != null ? e.getCancellingPhenomenon() : List.of(),
                e.getOperationallySignificantPhenomena() != null ? e.getOperationallySignificantPhenomena() : List.of()
        );
    }
}
