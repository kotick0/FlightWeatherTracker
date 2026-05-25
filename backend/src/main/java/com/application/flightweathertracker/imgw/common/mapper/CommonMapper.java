package com.application.flightweathertracker.imgw.common.mapper;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.Visibility;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.application.flightweathertracker.imgw.common.model.Wind;
import com.application.flightweathertracker.imgw.common.view.CloudView;
import com.application.flightweathertracker.imgw.common.view.VisibilityView;
import com.application.flightweathertracker.imgw.common.view.WeatherConditionView;
import com.application.flightweathertracker.imgw.common.view.WindView;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CommonMapper {

    public WindView mapWind(Wind w) {
        if (w == null) return null;
        return new WindView(w.unit(), w.direction(), w.directionDegrees(), w.speed());
    }

    public VisibilityView mapVisibility(Visibility v) {
        if (v == null) return null;
        return new VisibilityView(v.unit(), v.mainVisibility(), v.value());
    }

    public CloudView mapCloud(Cloud c) {
        if (c == null) return null;
        String formatted = c.quantity() + String.format("%03d", c.height());
        return new CloudView(c.quantity(), c.height(), formatted);
    }

    public WeatherConditionView mapCondition(WeatherCondition wc) {
        if (wc == null) return null;
        String intensity = wc.intensity() != null ? wc.intensity() : "";
        String phenomena = wc.phenomenons() != null ? String.join("", wc.phenomenons()) : "";
        return new WeatherConditionView(wc.intensity(), wc.phenomenons(), wc.valid(), (intensity + phenomena).trim());
    }

    public List<CloudView> mapClouds(List<Cloud> clouds) {
        if (clouds == null) return List.of();
        return clouds.stream().map(this::mapCloud).toList();
    }

    public List<WeatherConditionView> mapConditions(List<WeatherCondition> conditions) {
        if (conditions == null) return List.of();
        return conditions.stream().map(this::mapCondition).toList();
    }
}