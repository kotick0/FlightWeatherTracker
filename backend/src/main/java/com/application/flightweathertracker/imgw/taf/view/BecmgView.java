package com.application.flightweathertracker.imgw.taf.view;

import com.application.flightweathertracker.imgw.common.view.CloudView;
import com.application.flightweathertracker.imgw.common.view.WeatherConditionView;
import com.application.flightweathertracker.imgw.common.view.WindView;

import java.util.List;

public record BecmgView(
        Boolean cavok,
        ValidityView validity,
        String type,
        WindView wind,
        List<CloudView> clouds,
        List<WeatherConditionView> conditions
) {
}
