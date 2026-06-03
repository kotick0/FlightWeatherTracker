package com.application.flightweathertracker.alert;

import com.application.flightweathertracker.config.airports.service.AirportService;
import com.application.flightweathertracker.config.airports.view.AirportView;
import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsView;
import com.application.flightweathertracker.config.thresholds.sigmet.service.SigmetThresholdsService;
import com.application.flightweathertracker.imgw.sigmet.ImgwSigmetIngestionService;
import com.application.flightweathertracker.imgw.sigmet.service.SigmetService;
import com.application.flightweathertracker.imgw.sigmet.view.SigmetView;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SigmetDangerEvaluator {
    private final SigmetThresholdsService sigmetThresholdsService;
    private final SigmetService sigmetService;
    private final AirportService airportService;
    private final ImgwSigmetIngestionService sigmetIngestionService;

    private int countSigmetDangerFactor(SigmetView sigmetResponse) {
        Optional<SigmetThresholdsView> sigmetThresholds = sigmetThresholdsService.get();
        int dangerFactor = 0;

        if (sigmetThresholds.isPresent()) {
            //TODO Usunac min/max flight level z thresholdow + frontend

            boolean badIntensity = sigmetResponse.features().stream()
                    .anyMatch(f -> f.intensity() != null && f.intensity().equals(sigmetThresholds.get().maxIntensity()));
            if (badIntensity) dangerFactor += 10;

            boolean isWmoOperationallySignificant = sigmetThresholds.get().wmoOperationallySignificant().stream()
                    .anyMatch(t -> sigmetResponse.type() != null && sigmetResponse.type().equals(t));
            if (isWmoOperationallySignificant) dangerFactor += 16;

            boolean isWmoCancelling = sigmetThresholds.get().wmoCancelling().stream()
                    .anyMatch(t -> sigmetResponse.type() != null && sigmetResponse.type().equals(t));
            if (isWmoCancelling) dangerFactor += 24;

            boolean isPhenomenaOperationallySignificant = sigmetThresholds.get().phenomenaOperationallySignificant().stream()
                    .anyMatch(p -> sigmetResponse.features().stream()
                            .anyMatch(f -> f.phenomenon() != null && f.phenomenon().equals(p)));
            if (isPhenomenaOperationallySignificant) dangerFactor += 22;

            boolean isPhenomenaCancelling = sigmetThresholds.get().phenomenaCancelling().stream()
                    .anyMatch(p -> sigmetResponse.features().stream()
                            .anyMatch(f -> f.phenomenon() != null && f.phenomenon().equals(p)));
            if (isPhenomenaCancelling) dangerFactor += 28;
        }
        return dangerFactor;
    }
    public void countSigmetDangerFactorForAirports() {
        List<AirportView> airports = airportService.getAll();
        List<SigmetView> sigmetResponses = sigmetService.getActiveSigmets(Instant.now());
        for (AirportView airport : airports) {
            if(!sigmetResponses.isEmpty()) {
                for (SigmetView sigmetResponse : sigmetResponses) {
                    if (sigmetIngestionService.isAirportInSigmet(sigmetResponse, airport.icao())) {
                        int dangerFactor = countSigmetDangerFactor(sigmetResponse);
                        airportService.saveSigmetDangerFactor(airport.icao(), dangerFactor);
                    }
                }
            }
        }
    }
}
