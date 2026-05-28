package com.application.flightweathertracker.api.controller.config.thresholds;

import com.application.flightweathertracker.config.thresholds.taf.TafThresholdsView;
import com.application.flightweathertracker.config.thresholds.taf.service.TafThresholdsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/thresholds/taf")
@RequiredArgsConstructor
public class TafThresholdsController {
    private final TafThresholdsService tafThresholdsService;

    @GetMapping
    public ResponseEntity<TafThresholdsView> get() {
        return tafThresholdsService.get()
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<TafThresholdsView> update(@RequestBody TafThresholdsView view) {
        return tafThresholdsService.update(view)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
