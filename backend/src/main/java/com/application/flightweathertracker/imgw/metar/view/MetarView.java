package com.application.flightweathertracker.imgw.metar.view;

import com.application.flightweathertracker.imgw.common.view.CloudView;
import com.application.flightweathertracker.imgw.common.view.VisibilityView;
import com.application.flightweathertracker.imgw.common.view.WeatherConditionView;
import com.application.flightweathertracker.imgw.common.view.WindView;

import java.util.List;

public record MetarView(
        Long id,
        String station,
        String observedAt,
        String fetchedAt,
        String message,
        Integer temperature,
        Integer dewPoint,
        Integer altimeter,
        Boolean isCavok,
        Boolean isCancelled,
        Boolean isCorrected,
        WindView wind,
        VisibilityView visibility,
        List<CloudView> clouds,
        List<WeatherConditionView> conditions
) {
}