package com.application.flightweathertracker.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


@Component
@Slf4j
public class FetchData {

  public String fetchMetar() {
        try(HttpClient client = HttpClient.newHttpClient()) {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://aviation-api.imgw.pl/data/last?params=metar&format=json&count=1")) // TODO wynieść do properties
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response == null || !String.valueOf(response.statusCode()).startsWith("2")) {
                throw new RuntimeException("Error fetching data from API");
            }
            log.debug("Response:{}", response.body());
            return response.body();
        } catch (IOException | InterruptedException e) {
            log.error(e.getMessage());
        }
        throw new IllegalStateException();
    }
}
