package com.application.flightweathertracker.imgw.metar.mapper;

import com.application.flightweathertracker.imgw.common.mapper.CommonMapper;
import com.application.flightweathertracker.imgw.metar.database.MetarResponses;
import com.application.flightweathertracker.imgw.metar.view.MetarView;
import org.springframework.stereotype.Component;

@Component
public class MetarMapper {

    private final CommonMapper common;

    public MetarMapper(CommonMapper common) {
        this.common = common;
    }

    public MetarView map(MetarResponses e) {
        return new MetarView(
                e.getId(),
                e.getStation(),
                e.getObservedAt() != null ? e.getObservedAt().toString() : null,
                e.getFetchedAt() != null ? e.getFetchedAt().toString() : null,
                e.getMessage(),
                e.getTemperature(),
                e.getDewPoint(),
                e.getAltimeter(),
                e.getIsCavok(),
                e.getIsCancelled(),
                e.getIsCorrected(),
                common.mapWind(e.getWind()),
                common.mapVisibility(e.getVisibility()),
                common.mapClouds(e.getCloud()),
                common.mapConditions(e.getWeatherCondition())
        );
    }
}