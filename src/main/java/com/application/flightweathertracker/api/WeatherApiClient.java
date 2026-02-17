package com.application.flightweathertracker.api;

import com.application.flightweathertracker.model.metar.AirportData;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Map;


@Component
public class WeatherApiClient {
    private final ObjectMapper objectMapper;

    public WeatherApiClient(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public void fetchMetar() {
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=metar&format=json&count=1"))
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            Map<String, AirportData> data = objectMapper.readValue(response.body(), new TypeReference<Map<String, AirportData>>() {});
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
//    public TafData fetchTaf() {
//        try {
//            HttpClient client = HttpClient.newHttpClient();
//
//            HttpRequest request = HttpRequest.newBuilder()
//                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=metar,taf&format=json&count=1"))
//                    .build();
//
//            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//        } catch (IOException | InterruptedException e) {
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    public SigmetData fetchSigmet() {
//        try {
//            HttpClient client = HttpClient.newHttpClient();
//
//            HttpRequest request = HttpRequest.newBuilder()
//                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=new_sigmet&format=json"))
//                    .build();
//
//            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//
//        } catch (IOException | InterruptedException e) {
//            e.printStackTrace();
//        }
//        return null;
//    }

}
