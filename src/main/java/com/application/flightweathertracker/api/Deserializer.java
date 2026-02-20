package com.application.flightweathertracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import tools.jackson.databind.ObjectMapper;

public class Deserializer {
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private FetchData fetchData;

}
