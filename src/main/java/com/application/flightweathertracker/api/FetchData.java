package com.application.flightweathertracker.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


@Component
@Slf4j
public class FetchData {
    @Value("${api.imgw.metar}")
    String imgwMetar;

    @Value("${api.imgw.taf}")
    String imgwTaf;

    @Value("${api.imgw.sigmet}")
    String imgwSigmet;

    public String fetchMetar() {
        return fetchData(imgwMetar);
    }

    public String fetchTaf() {
        return fetchData(imgwTaf);
    }

    public String fetchSigmet() {
        return fetchData(imgwSigmet);
    }

    private String fetchData(String uri) {
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response == null || !String.valueOf(response.statusCode()).startsWith("2")) {
                throw new RuntimeException("Error fetching data from API");
            }
            return response.body();
        } catch (IOException | InterruptedException e) {
            log.error(e.getMessage());
        }
        throw new IllegalStateException();
    }
}

