package com.application.flightweathertracker.open_meteo.mapper;

import com.application.flightweathertracker.open_meteo.database.OpenMeteoResponsesTable;
import com.application.flightweathertracker.open_meteo.model.Current;
import com.application.flightweathertracker.open_meteo.model.CurrentUnits;
import com.application.flightweathertracker.open_meteo.model.Hourly;
import com.application.flightweathertracker.open_meteo.model.HourlyUnits;
import com.application.flightweathertracker.open_meteo.view.*;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class OpenMeteoMapper {

    public OpenMeteoView map(OpenMeteoResponsesTable e) {
        return new OpenMeteoView(
                e.getId(),
                e.getFetchedAt() != null ? e.getFetchedAt().toString() : null,
                e.getLatitude(),
                e.getLongitude(),
                e.getTimezone(),
                mapCurrentUnits(e.getCurrent_units()),
                mapCurrent(e.getCurrent()),
                mapHourlyUnits(e.getHourly_units()),
                mapHourly(e.getHourly())
        );
    }

    private CurrentView mapCurrent(Current c) {
        if (c == null) return null;
        return new CurrentView(
                c.time() != null ? c.time().toString() : null,
                c.interval(),
                c.temperature_2m(),
                c.wind_speed_10m(),
                c.wind_direction_10m(),
                c.wind_gusts_10m(),
                c.precipitation(),
                c.rain(),
                c.showers(),
                c.snowfall(),
                c.cloud_cover(),
                c.surface_pressure()
        );
    }

    private HourlyView mapHourly(Hourly h) {
        if (h == null) return null;
        List<String> times = h.time() != null
                ? h.time().stream().map(LocalDateTime::toString).toList()
                : List.of();
        return new HourlyView(
                times,
                h.temperature_2m(),
                h.dew_point_2m(),
                h.wind_speed_10m(),
                h.wind_direction_10m(),
                h.wind_gusts_10m(),
                h.visibility(),
                h.cloud_cover_low(),
                h.cloud_cover_mid(),
                h.cloud_cover_high(),
                h.surface_pressure(),
                h.snowfall(),
                h.snow_depth(),
                h.rain(),
                h.showers()
        );
    }

    private CurrentUnitsView mapCurrentUnits(CurrentUnits cu) {
        if (cu == null) return null;
        return new CurrentUnitsView(cu.time(), cu.interval(), cu.temperature_2m(),
                cu.wind_speed_10m(), cu.wind_direction_10m(), cu.wind_gusts_10m(),
                cu.precipitation(), cu.rain(), cu.showers(), cu.snowfall(),
                cu.cloud_cover(), cu.surface_pressure());
    }

    private HourlyUnitsView mapHourlyUnits(HourlyUnits hu) {
        if (hu == null) return null;
        return new HourlyUnitsView(hu.time(), hu.temperature_2m(), hu.dew_point_2m(),
                hu.wind_speed_10m(), hu.wind_direction_10m(), hu.wind_gusts_10m(),
                hu.visibility(), hu.cloud_cover_low(), hu.cloud_cover_mid(),
                hu.cloud_cover_high(), hu.surface_pressure(), hu.snowfall(),
                hu.snow_depth(), hu.rain(), hu.showers());
    }
}