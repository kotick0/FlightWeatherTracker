package com.application.flightweathertracker.imgw.taf;

import com.application.flightweathertracker.imgw.ImgwApiClient;
import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
import com.application.flightweathertracker.imgw.taf.database.long_term.LongTafResponsesRepository;
import com.application.flightweathertracker.imgw.taf.database.long_term.LongTafResponsesTable;
import com.application.flightweathertracker.imgw.taf.database.short_term.ShortTafResponsesRepository;
import com.application.flightweathertracker.imgw.taf.database.short_term.ShortTafResponsesTable;
import com.application.flightweathertracker.imgw.taf.model.TafData;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImgwTafService {

    private final ImgwApiClient imgwApiClient;
    private final ImgwJsonDeserializer imgwJsonDeserializer;
    private final ShortTafResponsesRepository shortTafResponsesRepository;
    private final LongTafResponsesRepository longTafResponsesRepository;

    public void saveImgwTafResponse() {
        String imgwTafResponseJson = imgwApiClient.fetchDataPerAirport();
        Map<String, TafData> deserializedTafResponse = imgwJsonDeserializer.deserializeTafs(imgwTafResponseJson);
        for (TafData tafData : deserializedTafResponse.values()) {
            if (tafData.getFc() != null) {
                try {
                    ShortTafResponsesTable responseRecord = ShortTafResponsesTable.builder()
                            .station(tafData.getFc().station())
                            .observedAt(tafData.getFc().date())
                            .fetchedAt(LocalDateTime.now())
                            .message(tafData.getFc().message())
                            .isCAVOK(tafData.getFc().isCAVOK())
                            .isCancelled(tafData.getFc().isCancelled())
                            .isCorrected(tafData.getFc().isCorrected())
                            .wind(tafData.getFc().wind())
                            .visibility(tafData.getFc().visibility())
                            .clouds(tafData.getFc().clouds())
                            .weatherConditions(tafData.getFc().weatherConditions())
                            .validity(tafData.getFc().validity())
                            .tempos(tafData.getFc().tempos())
                            .probs(tafData.getFc().probs())
                            .BECMGs(tafData.getFc().BECMGs())
                            .turbulence(tafData.getFc().turbulence())
                            .icings(tafData.getFc().icings())
                            .build();
                    shortTafResponsesRepository.save(responseRecord);
                } catch (DataIntegrityViolationException e) {
                    log.info("Short TAF already exists: ICAO={} observed_at={} - {}", tafData.getFc().station(), tafData.getFc().date(), e.getMessage(), e);
                }
                if (tafData.getFt() != null) {
                    try {
                        LongTafResponsesTable responseRecord = LongTafResponsesTable.builder()
                                .station(tafData.getFt().station())
                                .observedAt(tafData.getFt().date())
                                .fetchedAt(LocalDateTime.now())
                                .message(tafData.getFt().message())
                                .isCAVOK(tafData.getFt().isCAVOK())
                                .isCancelled(tafData.getFt().isCancelled())
                                .isCorrected(tafData.getFt().isCorrected())
                                .wind(tafData.getFt().wind())
                                .visibility(tafData.getFt().visibility())
                                .clouds(tafData.getFt().clouds())
                                .weatherConditions(tafData.getFt().weatherConditions())
                                .validity(tafData.getFt().validity())
                                .tempos(tafData.getFt().tempos())
                                .probs(tafData.getFt().probs())
                                .BECMGs(tafData.getFt().BECMGs())
                                .turbulence(tafData.getFt().turbulence())
                                .icings(tafData.getFt().icings())
                                .build();
                        longTafResponsesRepository.save(responseRecord);
                    } catch (DataIntegrityViolationException e) {
                        log.info("Long TAF already exists: ICAO={} observed_at={} - {}", tafData.getFt().station(), tafData.getFt().date(), e.getMessage(), e);
                    }
                }
                log.info("Taf responses successfully saved to the database");
            }
        }
    }
}
