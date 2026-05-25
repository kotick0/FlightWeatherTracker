package com.application.flightweathertracker.config.airports.controller;

import com.application.flightweathertracker.config.airports.service.AirportService;
import com.application.flightweathertracker.config.airports.view.AirportView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/airports")
public class AirportController {

    private final AirportService service;

    public AirportController(AirportService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<AirportView>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }
}