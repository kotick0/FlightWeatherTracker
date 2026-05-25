package com.application.flightweathertracker.imgw.sigmet.view;


import java.util.List;

public record SigmetFeatureView(
        String geometryType,
        List<List<List<Double>>> coordinates,
        String phenomenon,
        String phenomenonDescription,
        String flightLevel,
        String intensity,
        String observationType,
        String movementDirection,
        String movement,
        String validPeriod
) {
}
