package com.application.flightweathertracker.api.controller.config;

import com.application.flightweathertracker.config.airports.service.AirportService;
import com.application.flightweathertracker.config.airports.view.AirportView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<AirportView> create(@RequestBody AirportView view) {
        return ResponseEntity.ok(service.create(view));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AirportView> update(@PathVariable Long id, @RequestBody AirportView view) {
        return ResponseEntity.ok(service.update(id, view));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}