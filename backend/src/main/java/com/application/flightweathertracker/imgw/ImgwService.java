package com.application.flightweathertracker.imgw;

import com.application.flightweathertracker.imgw.metar.MetarService;
import com.application.flightweathertracker.imgw.sigmet.SigmetService;
import com.application.flightweathertracker.imgw.taf.TafService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImgwService {
    private final MetarService metarService;
    private final TafService tafService;
    private final SigmetService sigmetService;

    public void saveAllImgwResponsesForAirportsConfig() {
        metarService.saveImgwMetarResponse();
        tafService.saveImgwTafResponse();
        sigmetService.saveImgwSigmetResponse();
    }
}
