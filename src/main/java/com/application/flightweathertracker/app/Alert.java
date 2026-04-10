package com.application.flightweathertracker.app;

import com.application.flightweathertracker.model.imgw.metar.ImgwMetar;
import com.application.flightweathertracker.model.imgw.sigmet.ImgwSigmet;
import com.application.flightweathertracker.model.imgw.taf.ImgwTaf;
import com.application.flightweathertracker.model.imgw.taf.TafData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class Alert {
    @Value("${api.responses.dir}")
    String apiResponsesDir;

    private final Deserializer deserializer;

    private final Operations operations;

    @Scheduled(fixedRate = 60000) //TODO: Zmienić na coś sensownego
    public boolean alertSystem() {
        Path metarPath = Paths.get(apiResponsesDir + "metar_response.json");
        Path tafPath = Paths.get(apiResponsesDir + "taf_response.json");
        Path sigmetPath = Paths.get(apiResponsesDir + "sigmet_response.json");

        try {
            String metarResponse = Files.readString(metarPath);
            String tafResponse = Files.readString(tafPath);
            String sigmetResponse = Files.readString(sigmetPath);

            Map<String, ImgwMetar> deserializedMetars = deserializer.deserializeMetars(metarResponse);
            Map<String, TafData> deserializedTafs = deserializer.deserializeTafs(tafResponse);
            Map<String, ImgwSigmet> deserializedSigmets = deserializer.deserializeSigmets(sigmetResponse);

//            for (String key : deserializedMetars.keySet()) {
//                System.out.println(deserializedMetars.get(key));
//            }

        } catch (IOException e) {
            log.error("Error reading \"metar_response.json\" from saved API responses.");
            throw new RuntimeException(e);
        }

        return false;
    }

    private boolean doesMetarAlert(ImgwMetar imgwMetar) {
        return false;
    }

    private boolean doesTafAlert(ImgwTaf imgwTaf) {
        return false;
    }

//    private boolean doesSigmetAlert(ImgwSigmet imgwSigmet) {
//        return false;
//    }
}
