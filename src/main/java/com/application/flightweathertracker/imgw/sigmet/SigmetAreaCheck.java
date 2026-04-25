package com.application.flightweathertracker.imgw.sigmet;

import com.application.flightweathertracker.config.AirportsConfig;
import com.application.flightweathertracker.imgw.common.model.Airport;
import com.application.flightweathertracker.imgw.sigmet.model.ImgwSigmet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.Polygon;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class SigmetAreaCheck {
    @Value("${airports.config.path}")
    String airportsConfigPath;

    private final GeometryFactory geometryFactory;

    private final AirportsConfig airportsConfig;

    public boolean IsAirportInSigmet(ImgwSigmet sigmet, String icao) {
        try {
            if (sigmet != null) {
                String airportsConfigJson = Files.readString(Paths.get(airportsConfigPath));

                List<List<Double>> coordinates = sigmet.geojson().features().getFirst().geometry().coordinates().getFirst();
                List<Coordinate> coords = new ArrayList<>();
                for (List<Double> coordinateSet : coordinates) {
                    coords.add(new Coordinate(coordinateSet.get(0), coordinateSet.get(1)));
                }
                Coordinate[] coordinatesArray = coords.toArray(new Coordinate[0]);
                Polygon polygon = geometryFactory.createPolygon(coordinatesArray);

                HashMap<String, Airport> airports = airportsConfig.readAirportsConfig(airportsConfigJson);
                double longitude = airports.get(icao).longitude();
                double latitude = airports.get(icao).latitude();
                Point airportPoint = geometryFactory.createPoint(new Coordinate(longitude, latitude));

                return polygon.covers(airportPoint);
            } else {
                throw new RuntimeException("Provided SIGMET was null");
            }

        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error reading airports config");
        }
    }
}
