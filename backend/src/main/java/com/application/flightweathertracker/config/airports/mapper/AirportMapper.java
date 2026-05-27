package com.application.flightweathertracker.config.airports.mapper;

import com.application.flightweathertracker.config.airports.database.Airports;
import com.application.flightweathertracker.config.airports.view.AirportView;
import org.springframework.stereotype.Component;

@Component
public class AirportMapper {

    public AirportView map(Airports e) {
        return new AirportView(
                e.getId(),
                e.getName(),
                e.getIcao(),
                e.getCity(),
                e.getLatitude(),
                e.getLongitude(),
                e.isMILITARY()
        );
    }
}
