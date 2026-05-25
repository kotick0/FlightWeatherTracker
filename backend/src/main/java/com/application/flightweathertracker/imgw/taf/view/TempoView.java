package com.application.flightweathertracker.imgw.taf.view;

import com.application.flightweathertracker.imgw.common.view.CloudView;
import com.application.flightweathertracker.imgw.common.view.WeatherConditionView;

import java.util.List;

public record TempoView(
        Boolean cavok,
        Integer probability,
        ValidityView validity,
        String type,
        List<CloudView> clouds,
        List<WeatherConditionView> conditions
) {
}