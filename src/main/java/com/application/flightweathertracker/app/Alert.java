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

    private final JsonDeserializer jsonDeserializer;


    @Scheduled(fixedRate = 60000) //TODO: Zmienić na coś sensownego
    public boolean alertSystem() {
        Path metarPath = Paths.get(apiResponsesDir + "metar_response.json");
        Path tafPath = Paths.get(apiResponsesDir + "taf_response.json");
        Path sigmetPath = Paths.get(apiResponsesDir + "sigmet_response.json");

        try {
            if (Files.exists(metarPath) && Files.exists(tafPath) && Files.exists(sigmetPath)) {
                String metarResponse = Files.readString(metarPath);
                String tafResponse = Files.readString(tafPath);
                String sigmetResponse = Files.readString(sigmetPath);
                Map<String, ImgwMetar> deserializedMetars = jsonDeserializer.deserializeMetars(metarResponse);
                Map<String, TafData> deserializedTafs = jsonDeserializer.deserializeTafs(tafResponse);
                Map<String, ImgwSigmet> deserializedSigmets = jsonDeserializer.deserializeSigmets(sigmetResponse);

//            for (String key : deserializedMetars.keySet()) {
//                System.out.println(deserializedMetars.get(key));
//            }
            }
        } catch (IOException e) {
            log.error(e.getMessage());
            throw new RuntimeException("Error reading cached API responses");
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
