package com.application.flightweathertracker.imgw.common.view;

import java.util.List;

public record WeatherConditionView(
        String intensity,
        List<String> phenomenons,
        Boolean valid,
        String formatted
) {
}
