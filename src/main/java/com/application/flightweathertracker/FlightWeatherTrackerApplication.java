package com.application.flightweathertracker;

import com.application.flightweathertracker.api.FetchData;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tools.jackson.databind.ObjectMapper;

@SpringBootApplication
public class FlightWeatherTrackerApplication {

    public static void main(String[] args) {

        SpringApplication.run(FlightWeatherTrackerApplication.class, args);

        ObjectMapper mapper = new ObjectMapper();
        FetchData fetchData = new FetchData(mapper);
        fetchData.fetchMetar();
    }
}
