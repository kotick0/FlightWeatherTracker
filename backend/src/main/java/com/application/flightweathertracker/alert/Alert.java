//package com.application.flightweathertracker.alert;
//
//import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
//import com.application.flightweathertracker.imgw.metar.model.ImgwMetar;
//import com.application.flightweathertracker.imgw.sigmet.model.ImgwSigmet;
//import com.application.flightweathertracker.imgw.taf.model.ImgwTaf;
//import com.application.flightweathertracker.imgw.taf.model.TafData;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.Map;
//
//@Service
//@RequiredArgsConstructor
//@Slf4j
//public class Alert {
//    private final ImgwJsonDeserializer imgwJsonDeserializer;
//
//
//    @Scheduled(fixedRate = 60000) //TODO: Zmienić na coś sensownego
//    public boolean alertSystem() {
//        Path metarPath = Paths.get(apiResponsesDir + "metar_response.json");
//        Path tafPath = Paths.get(apiResponsesDir + "taf_response.json");
//        Path sigmetPath = Paths.get(apiResponsesDir + "sigmet_response.json");
//
//        try {
//            if (Files.exists(metarPath) && Files.exists(tafPath) && Files.exists(sigmetPath)) {
//                String metarResponse = Files.readString(metarPath);
//                String tafResponse = Files.readString(tafPath);
//                String sigmetResponse = Files.readString(sigmetPath);
//                Map<String, ImgwMetar> deserializedMetars = imgwJsonDeserializer.deserializeMetars(metarResponse);
//                Map<String, TafData> deserializedTafs = imgwJsonDeserializer.deserializeTafs(tafResponse);
//                Map<String, ImgwSigmet> deserializedSigmets = imgwJsonDeserializer.deserializeSigmets(sigmetResponse);
//
////            for (String key : deserializedMetars.keySet()) {
////                System.out.println(deserializedMetars.get(key));
////            }
//            }
//        } catch (IOException e) {
//            log.error(e.getMessage());
//            throw new RuntimeException("Error reading cached API responses");
//        }
//
//        return false;
//    }
//
//    private boolean doesMetarAlert(ImgwMetar imgwMetar) {
//        return false;
//    }
//
//    private boolean doesTafAlert(ImgwTaf imgwTaf) {
//        return false;
//    }
//
////    private boolean doesSigmetAlert(ImgwSigmet imgwSigmet) {
////        return false;
////    }
//}
