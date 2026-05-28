package com.application.flightweathertracker.api.controller.config.thresholds;

import com.application.flightweathertracker.config.thresholds.metar.MetarThresholdsView;
import com.application.flightweathertracker.config.thresholds.metar.service.MetarThresholdsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/thresholds/metar")
@RequiredArgsConstructor
public class MetarThresholdsController {
    private final MetarThresholdsService service;

    @GetMapping
    public ResponseEntity<MetarThresholdsView> get() {
        return service.get()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<MetarThresholdsView> update(@RequestBody MetarThresholdsView request) {
        return service.update(request)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
