package com.application.flightweathertracker.imgw.taf.view;

import com.application.flightweathertracker.imgw.common.view.CloudView;
import com.application.flightweathertracker.imgw.common.view.VisibilityView;
import com.application.flightweathertracker.imgw.common.view.WeatherConditionView;
import com.application.flightweathertracker.imgw.common.view.WindView;

import java.util.List;

public record TafView(
        Long id,
        String station,
        String observedAt,
        String fetchedAt,
        String message,
        Boolean isCAVOK,
        Boolean isCancelled,
        Boolean isCorrected,
        WindView wind,
        VisibilityView visibility,
        List<CloudView> clouds,
        List<WeatherConditionView> conditions,
        ValidityView validity,
        List<TempoView> tempos,
        List<ProbView> probs,
        List<BecmgView> becmgs
) {
}