package com.application.flightweathertracker.api;

import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


@Component
public class FetchData {
    private final ObjectMapper objectMapper;

    public FetchData(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public String fetchMetar() {
        HttpResponse<String> response = null;
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=metar&format=json&count=1"))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return response.body();
    }
}
