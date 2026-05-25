package com.application.flightweathertracker.api.controller;

import com.application.flightweathertracker.imgw.metar.service.MetarService;
import com.application.flightweathertracker.imgw.metar.view.MetarView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/metar")
public class MetarController {
    private final MetarService service;

    public MetarController(MetarService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<MetarView>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }
}