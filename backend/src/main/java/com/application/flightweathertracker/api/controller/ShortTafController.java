package com.application.flightweathertracker.api.controller;

import com.application.flightweathertracker.imgw.taf.service.ShortTafService;
import com.application.flightweathertracker.imgw.taf.view.TafView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/taf/short")
public class ShortTafController {

    private final ShortTafService service;

    public ShortTafController(ShortTafService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TafView>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }
}
