package com.application.flightweathertracker.api.controller.imgw;

import com.application.flightweathertracker.api.ReportQueryParams;
import com.application.flightweathertracker.imgw.taf.service.ShortTafService;
import com.application.flightweathertracker.imgw.taf.view.TafView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<List<TafView>> getAll(
            @RequestParam(value = "icaos", required = false) String icaos,
            @RequestParam(value = "icao", required = false) List<String> icao,
            @RequestParam(required = false) Integer hours
    ) {
        List<String> stations = ReportQueryParams.mergeStationCodes(icaos, icao);
        if (!stations.isEmpty()) {
            return ResponseEntity.ok(service.getFiltered(stations, ReportQueryParams.resolveHours(hours)));
        }
        if (hours != null) {
            return ResponseEntity.ok(List.of());
        }
        return ResponseEntity.ok(service.getAll());
    }
}
