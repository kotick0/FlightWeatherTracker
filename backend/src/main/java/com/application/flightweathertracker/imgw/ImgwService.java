package com.application.flightweathertracker.imgw;

import com.application.flightweathertracker.imgw.metar.ImgwMetarService;
import com.application.flightweathertracker.imgw.sigmet.ImgwSigmetService;
import com.application.flightweathertracker.imgw.taf.ImgwTafService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImgwService {
    private final ImgwMetarService imgwMetarService;
    private final ImgwTafService imgwTafService;
    private final ImgwSigmetService sigmetService;

    public void saveAllImgwResponsesForAirportsConfig() {
        imgwMetarService.saveImgwMetarResponse();
        imgwTafService.saveImgwTafResponse();
        sigmetService.saveImgwSigmetResponse();
    }
}
