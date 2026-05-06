package com.application.flightweathertracker.imgw.sigmet;

import com.application.flightweathertracker.imgw.ImgwApiClient;
import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
import com.application.flightweathertracker.imgw.sigmet.database.SigmetResponsesRepository;
import com.application.flightweathertracker.imgw.sigmet.database.SigmetResponsesTable;
import com.application.flightweathertracker.imgw.sigmet.model.ImgwSigmet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class SigmetService {
    private final ImgwApiClient imgwApiClient;
    private final ImgwJsonDeserializer imgwJsonDeserializer;
    private final SigmetResponsesRepository sigmetResponsesRepository;

    public void saveImgwSigmetResponse() {
        String imgwSigmetResponseJson = imgwApiClient.fetchAllSigmet();
        Map<String, ImgwSigmet> deserializedSigmetResponse = imgwJsonDeserializer.deserializeSigmets(imgwSigmetResponseJson);
        for (ImgwSigmet imgwSigmet : deserializedSigmetResponse.values()) {
            if (imgwSigmet != null) {
                SigmetResponsesTable responseRecord = SigmetResponsesTable.builder()
                        .fetchedAt(LocalDateTime.now())
                        .TT(imgwSigmet.TT())
                        .AA(imgwSigmet.AA())
                        .ii(imgwSigmet.ii())
                        .is_cnl(imgwSigmet.is_cnl())
                        .BBB(imgwSigmet.BBB())
                        .YYGGgg(imgwSigmet.YYGGgg())
                        .valid_from(imgwSigmet.valid_from())
                        .cnl_id(imgwSigmet.cnl_id())
                        .message(imgwSigmet.message())
                        .geojson(imgwSigmet.geojson())
                        .Transmission_time(imgwSigmet.Transmission_time())
                        .valid_to(imgwSigmet.valid_to())
                        .is_valid(imgwSigmet.is_valid())
                        .sigmet_id(imgwSigmet.id())
                        .cnl_valid(imgwSigmet.cnl_valid())
                        .CCCC(imgwSigmet.CCCC())
                        .build();
                sigmetResponsesRepository.save(responseRecord);
            }
        }
        log.info("Sigmet responses successfully saved to the database");
    }
}
