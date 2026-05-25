package com.application.flightweathertracker.imgw.taf.view;

import com.application.flightweathertracker.imgw.common.view.CloudView;
import com.application.flightweathertracker.imgw.common.view.VisibilityView;
import com.application.flightweathertracker.imgw.common.view.WeatherConditionView;

import java.util.List;

public record ProbView(
        Boolean cavok,
        Integer probability,
        ValidityView validity,
        String type,
        VisibilityView visibility,
        List<CloudView> clouds,
        List<WeatherConditionView> conditions
) {
}
