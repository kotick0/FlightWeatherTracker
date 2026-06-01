package com.application.flightweathertracker.alert;

import com.application.flightweathertracker.config.airports.service.AirportService;
import com.application.flightweathertracker.config.airports.view.AirportView;
import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsView;
import com.application.flightweathertracker.config.thresholds.metar.service.MetarThresholdsService;
import com.application.flightweathertracker.imgw.metar.service.MetarService;
import com.application.flightweathertracker.imgw.metar.view.MetarView;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MetarAlert {
    private final MetarThresholdsService metarThresholdsService;
    private final AirportService airportService;
    private final MetarService metarService;
    private int calculateMetarDangerFactor(MetarView metarResponse) {
        Optional<MetarThresholdsView> metarThresholds = metarThresholdsService.get();

        int dangerFactor = 0;

        if(metarResponse.message().contains("NIL")) {
            return dangerFactor;
        }

        if (metarThresholds.isPresent()) {
            if (metarResponse.visibility().value()!= null && metarResponse.visibility().value() < metarThresholds.get().minVisibility()) {
                dangerFactor += 14;
            }

            boolean lowClouds = metarResponse.clouds().stream()
                    .anyMatch(c -> c.height() < metarThresholds.get().minCloudHeight());
            if (lowClouds) dangerFactor += 10;

            boolean badQuantity = metarResponse.clouds().stream()
                    .anyMatch(c -> c.quantity().equals(metarThresholds.get().maxCloudQuantity()));
            if (badQuantity) dangerFactor += 7;

            if (metarResponse.altimeter() != null && metarResponse.altimeter() < metarThresholds.get().minAltimeter()) {
                dangerFactor += 1;
            }

            if (metarResponse.temperature() != null && metarResponse.temperature() > metarThresholds.get().maxTemperature()) {
                dangerFactor += 1;
            }

            if (metarResponse.wind().speed() != null && metarResponse.wind().speed() > metarThresholds.get().maxWindSpeed()) {
                dangerFactor += 12;
            }

            if (metarResponse.wind().gust() != null && metarResponse.wind().gust() > metarThresholds.get().maxGustSpeed()) {
                dangerFactor += 8;
            }

            boolean badWeatherIntensity = metarResponse.conditions().stream()
                    .anyMatch(c -> c.intensity() != null && c.intensity().equals(metarThresholds.get().maxWeatherIntensity()));
            if (badWeatherIntensity) dangerFactor += 7;

            //TODO: Dodać windShear kiedy poznam strukturę (+ 5)

            boolean isCancellingPhenomena = metarResponse.conditions().stream()
                    .anyMatch(p -> p.phenomenons() != null && p.phenomenons().equals(metarThresholds.get().cancellingPhenomenon()));
            if (isCancellingPhenomena) dangerFactor += 24;

            boolean isOperationallySignificantPhenomena = metarResponse.conditions().stream()
                    .anyMatch(p -> p.phenomenons() != null && p.phenomenons().equals(metarThresholds.get().operationallySignificantPhenomena()));
            if (isOperationallySignificantPhenomena) dangerFactor += 11;

        }
        return dangerFactor;
    }

    public void countDangerFactorForAirports() {
        List<AirportView> airports = airportService.getAll();
        List<MetarView> metarResponses = metarService.getAll();
        for (AirportView airport : airports) {
            for (MetarView metarResponse : metarResponses) {
                if (metarResponse.station().equals(airport.icao())) {
                    int dangerFactor = calculateMetarDangerFactor(metarResponse);
                    airportService.saveDangerFactor(metarResponse.station(), dangerFactor);
                }
            }
        }
    }

}
