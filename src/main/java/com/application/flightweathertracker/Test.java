package com.application.flightweathertracker;

import com.application.flightweathertracker.api.Deserializer;
import com.application.flightweathertracker.api.FetchData;
import com.application.flightweathertracker.imgw.model.metar.ImgwMetar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import tools.jackson.databind.ObjectMapper;

import java.util.Map;

public class Test implements CommandLineRunner {
    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private FetchData fetchData;

    @Autowired
    private Deserializer deserializer;

    @Override
    public void run(String... args) throws Exception {
        Map<String, ImgwMetar> metars = deserializer.deserializeMetars(fetchData.fetchMetar());
        System.out.println(metars);
    }
}
