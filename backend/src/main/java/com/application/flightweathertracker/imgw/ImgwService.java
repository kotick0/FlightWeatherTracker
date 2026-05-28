package com.application.flightweathertracker.imgw;

import com.application.flightweathertracker.imgw.metar.ImgwMetarIngestionService;
import com.application.flightweathertracker.imgw.sigmet.ImgwSigmetIngestionService;
import com.application.flightweathertracker.imgw.taf.ImgwTafIngestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImgwService {
    private final ImgwMetarIngestionService imgwMetarIngestionService;
    private final ImgwTafIngestionService imgwTafIngestionService;
    private final ImgwSigmetIngestionService sigmetService;

    public void saveAllImgwResponsesForAirportsConfig() {
        imgwMetarIngestionService.saveImgwMetarResponse();
        imgwTafIngestionService.saveImgwTafResponse();
        sigmetService.saveImgwSigmetResponse();
    }
}
