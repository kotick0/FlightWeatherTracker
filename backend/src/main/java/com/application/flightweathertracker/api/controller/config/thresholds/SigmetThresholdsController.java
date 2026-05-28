package com.application.flightweathertracker.api.controller.config.thresholds;

import com.application.flightweathertracker.config.thresholds.sigmet.SigmetThresholdsView;
import com.application.flightweathertracker.config.thresholds.sigmet.service.SigmetThresholdsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/thresholds/sigmet")
@RequiredArgsConstructor
public class SigmetThresholdsController {
    private final SigmetThresholdsService service;

    @GetMapping
    public ResponseEntity<SigmetThresholdsView> get() {
        return service.get()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<SigmetThresholdsView> update(@RequestBody SigmetThresholdsView view) {
        return service.update(view)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
