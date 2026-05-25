package com.application.flightweathertracker.api.controller;

import com.application.flightweathertracker.open_meteo.service.OpenMeteoService;
import com.application.flightweathertracker.open_meteo.view.OpenMeteoView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/open-meteo")
public class OpenMeteoController {
    private final OpenMeteoService service;

    public OpenMeteoController(OpenMeteoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<OpenMeteoView> getLatest() {
        return service.getLatest()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
