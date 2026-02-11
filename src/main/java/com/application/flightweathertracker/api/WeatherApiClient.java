package com.application.flightweathertracker.api;

import com.application.flightweathertracker.model.MetarData;
import com.application.flightweathertracker.model.SigmetData;
import com.application.flightweathertracker.model.TafData;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Component
public class WeatherApiClient {
    public WeatherApiClient() {
    }

    public MetarData fetchMetar() {
        try {
            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=metar,taf&format=json&count=1"))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            ObjectMapper mapper = new ObjectMapper();
            MetarData metarData = mapper.readValue(response.body(), MetarData.class);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }
    public TafData fetchTaf() {
        try {
            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=metar,taf&format=json&count=1"))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public SigmetData fetchSigmet() {
        try {
            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=new_sigmet&format=json"))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

}
