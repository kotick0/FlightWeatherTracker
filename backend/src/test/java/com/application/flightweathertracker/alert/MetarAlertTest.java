package com.application.flightweathertracker.alert;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MetarAlertTest {
    @Autowired
    private MetarAlert metarAlert;

    @Test
    public void testCalculateMetarDangerFactor() {
        metarAlert.countDangerFactorForAirports();
    }

}
