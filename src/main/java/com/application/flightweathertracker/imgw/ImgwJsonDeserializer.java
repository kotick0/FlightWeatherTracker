package com.application.flightweathertracker.imgw;

import com.application.flightweathertracker.imgw.metar.model.ImgwMetar;
import com.application.flightweathertracker.imgw.sigmet.model.ImgwSigmet;
import com.application.flightweathertracker.imgw.taf.model.ImgwTaf;
import com.application.flightweathertracker.imgw.taf.model.TafData;
import com.application.flightweathertracker.open_meteo.model.OpenMeteoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class ImgwJsonDeserializer {
    private final ObjectMapper objectMapper;

    public Map<String, ImgwMetar> deserializeMetars(String metarResponseJson) {
        Map<String, ImgwMetar> metars = new HashMap<>();
        JsonNode root = objectMapper.readValue(metarResponseJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode pl = entry.getValue().path("metars").path("sa").path("pl");
            pl.forEach(metar -> metars.putIfAbsent(icao, objectMapper.treeToValue(metar, ImgwMetar.class)));
        });
        return metars;
    }

    public Map<String, TafData> deserializeTafs(String tafResponseJson) {
        Map<String, TafData> tafs = new HashMap<>();
        JsonNode root = objectMapper.readValue(tafResponseJson, JsonNode.class);

        root.properties().forEach(entry -> {
            String icao = entry.getKey();
            JsonNode fcPl = entry.getValue().path("tafs").path("fc").path("pl");
            JsonNode ftPl = entry.getValue().path("tafs").path("ft").path("pl");

            fcPl.forEach(taf -> tafs.computeIfAbsent(icao, k -> new TafData()).setFc(objectMapper.treeToValue(taf, ImgwTaf.class)));
            ftPl.forEach(taf -> tafs.computeIfAbsent(icao, k -> new TafData()).setFt(objectMapper.treeToValue(taf, ImgwTaf.class)));

        });
        return tafs;
    }

    public Map<String, ImgwSigmet> deserializeSigmets(String sigmetResponseJson) {
        List<ImgwSigmet> list = objectMapper.readValue(sigmetResponseJson, new TypeReference<>() {
        });
        return list.stream().collect(Collectors.toMap(ImgwSigmet::id, sigmet -> sigmet));
    }

    public OpenMeteoResponse deserializeOpenMeteoResponse(String openMeteoResponseJson) {
        return objectMapper.readValue(openMeteoResponseJson, OpenMeteoResponse.class);
    }
}
