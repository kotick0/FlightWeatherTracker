package com.application.flightweathertracker.alert;

import com.application.flightweathertracker.alert.danger.MetarDangerEvaluator;
import com.application.flightweathertracker.alert.danger.SigmetDangerEvaluator;
import com.application.flightweathertracker.alert.danger.TafDangerEvaluator;
import com.application.flightweathertracker.imgw.taf.service.LongTafService;
import com.application.flightweathertracker.imgw.taf.service.ShortTafService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AlertTest {
    @Autowired
    private MetarDangerEvaluator metarDangerEvaluator;

    @Autowired
    TafDangerEvaluator tafDangerEvaluator;

    @Autowired
    SigmetDangerEvaluator sigmetDangerEvaluator;

    @Autowired
    private LongTafService longTafService;

    @Autowired
    private ShortTafService shortTafService;



    @Test
    public void testCountDangerFactor() {
        metarDangerEvaluator.countMetarDangerFactorForAirports();
        tafDangerEvaluator.countTafDangerFactorForAirports(longTafService.getLatest());
        tafDangerEvaluator.countTafDangerFactorForAirports(shortTafService.getLatest());
        sigmetDangerEvaluator.countSigmetDangerFactorForAirports();
    }

}
