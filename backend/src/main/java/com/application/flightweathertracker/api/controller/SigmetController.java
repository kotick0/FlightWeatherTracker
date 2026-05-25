package com.application.flightweathertracker.api.controller;

import com.application.flightweathertracker.imgw.sigmet.service.SigmetService;
import com.application.flightweathertracker.imgw.sigmet.view.SigmetView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sigmet")
public class SigmetController {
    private final SigmetService service;

    public SigmetController(SigmetService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<SigmetView>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }
}
