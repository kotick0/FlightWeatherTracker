package com.application.flightweathertracker.alert;

import com.application.flightweathertracker.config.airports.service.AirportService;
import com.application.flightweathertracker.config.airports.view.AirportView;
import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsView;
import com.application.flightweathertracker.config.thresholds.taf.service.TafThresholdsService;
import com.application.flightweathertracker.imgw.taf.view.TafView;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class TafDangerEvaluator {

    private final TafThresholdsService tafThresholdsService;
    private final AirportService airportService;

    private int countTafDangerFactor(TafView tafResponse) {
        Optional<TafThresholdsView> tafThresholds = tafThresholdsService.get();

        int dangerFactor = 0;

        if (tafResponse.message().contains("NIL")) {
            return dangerFactor;
        }

        if (tafThresholds.isPresent()) {
            if (tafResponse.visibility().value() != null && tafResponse.visibility().value() < tafThresholds.get().minVisibility()) {
                dangerFactor += 15;
            }

            boolean lowClouds = tafResponse.clouds().stream()
                    .anyMatch(c -> c.height() != null && c.height() < tafThresholds.get().minCloudHeight());
            if (lowClouds) dangerFactor += 10;

            boolean badCloudQuantity = tafResponse.clouds().stream()
                    .anyMatch(c -> c.quantity() != null && c.quantity().equals(tafThresholds.get().maxCloudQuantity()));
            if (badCloudQuantity) dangerFactor += 5;

            boolean badCloudType = tafResponse.clouds().stream()
                    .anyMatch(c -> c.type() != null && c.type().equals(tafThresholds.get().cancellingCloudType()));
            if (badCloudType) dangerFactor += 8;

            if (tafResponse.wind().speed() != null && tafResponse.wind().speed() > tafThresholds.get().maxWindSpeed()) {
                dangerFactor += 13;
            }

            if (tafResponse.wind().gust() != null && tafResponse.wind().gust() > tafThresholds.get().maxGustSpeed()) {
                dangerFactor += 8;
            }

            boolean badTempoProbability = tafResponse.tempos().stream()
                    .anyMatch(t -> t.probability() != null && t.probability() < tafThresholds.get().minTempoProbability());
            if (badTempoProbability) dangerFactor += 4;

            boolean isCancellingPhenomena = tafResponse.conditions().stream()
                    .anyMatch(p -> p.phenomenons() != null && p.phenomenons().equals(tafThresholds.get().cancellingPhenomenon()));
            if (isCancellingPhenomena) dangerFactor += 25;

            boolean isOperationallySignificantPhenomena = tafResponse.conditions().stream()
                    .anyMatch(p -> p.phenomenons() != null && p.phenomenons().equals(tafThresholds.get().operationallySignificantPhenomena()));
            if (isOperationallySignificantPhenomena) dangerFactor += 12;

        }
        return dangerFactor;
    }

    public void countTafDangerFactorForAirports(List<TafView> tafResponses) {
        List<AirportView> airports = airportService.getAll();
        for (AirportView airport : airports) {
            for (TafView longTafResponse : tafResponses) {
                if (longTafResponse.station().equals(airport.icao())) {
                    int dangerFactor = countTafDangerFactor(longTafResponse);
                    airportService.saveTafDangerFactor(longTafResponse.station(), dangerFactor); //TODO Change to saveTafDangerFactor
                }
            }
        }
    }
}
