package com.application.flightweathertracker.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AlertTest {
    @Autowired
    private Alert alert;

    @Test
    public void alertSystemTest() {
        alert.alertSystem();
    }
}
