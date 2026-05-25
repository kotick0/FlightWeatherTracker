package com.application.flightweathertracker.api.controller;

import com.application.flightweathertracker.imgw.taf.service.LongTafService;
import com.application.flightweathertracker.imgw.taf.view.TafView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/taf/long")
public class LongTafController {

    private final LongTafService service;

    public LongTafController(LongTafService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TafView>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }
}

