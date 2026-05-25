package com.application.flightweathertracker.imgw.metar;

import com.application.flightweathertracker.imgw.ImgwApiClient;
import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
import com.application.flightweathertracker.imgw.metar.database.MetarResponsesRepository;
import com.application.flightweathertracker.imgw.metar.database.MetarResponsesTable;
import com.application.flightweathertracker.imgw.metar.model.ImgwMetar;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImgwMetarService {
    private final ImgwApiClient imgwApiClient;
    private final ImgwJsonDeserializer imgwJsonDeserializer;
    private final MetarResponsesRepository metarResponsesRepository;

    public void saveImgwMetarResponse() {
        // TODO: Jezeli sa dane nowsze niz 30 min nie pobieraj danych
        String imgwMetarResponseJson = imgwApiClient.fetchDataPerAirport();
        Map<String, ImgwMetar> deserializedMetarResponse = imgwJsonDeserializer.deserializeMetars(imgwMetarResponseJson);
        for (ImgwMetar imgwMetar : deserializedMetarResponse.values()) {
            try {
                MetarResponsesTable responseRecord = MetarResponsesTable.builder()
                        .station(imgwMetar.station())
                        .observedAt(imgwMetar.date())
                        .fetchedAt(LocalDateTime.now())
                        .message(imgwMetar.message())
                        .temperature(imgwMetar.temperature())
                        .dewPoint(imgwMetar.dewPoint())
                        .altimeter(imgwMetar.altimeter())
                        .isCavok(imgwMetar.isCAVOK())
                        .isCancelled(imgwMetar.isCancelled())
                        .isCorrected(imgwMetar.isCorrected())
                        .wind(imgwMetar.wind())
                        .visibility(imgwMetar.visibility())
                        .cloud(imgwMetar.cloud())
                        .weatherCondition(imgwMetar.weatherCondition())
                        .build();
                metarResponsesRepository.save(responseRecord);
            } catch (DataIntegrityViolationException e) {
                log.info("METAR already exists: ICAO={} observed_at={}", imgwMetar.station(), imgwMetar.date());
            }
        }
        log.info("Metar responses successfully saved to the database");
    }
}
