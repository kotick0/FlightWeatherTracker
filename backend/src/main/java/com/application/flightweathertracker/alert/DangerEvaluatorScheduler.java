package com.application.flightweathertracker.alert;

import com.application.flightweathertracker.alert.danger.MetarDangerEvaluator;
import com.application.flightweathertracker.alert.danger.SigmetDangerEvaluator;
import com.application.flightweathertracker.alert.danger.TafDangerEvaluator;
import com.application.flightweathertracker.imgw.taf.service.LongTafService;
import com.application.flightweathertracker.imgw.taf.service.ShortTafService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@Slf4j
@EnableScheduling
@RequiredArgsConstructor
public class DangerEvaluatorScheduler {
    private final MetarDangerEvaluator metarDangerEvaluator;
    private final TafDangerEvaluator tafDangerEvaluator;
    private final SigmetDangerEvaluator sigmetDangerEvaluator;

    private final LongTafService longTafService;
    private final ShortTafService shortTafService;

    @Scheduled(fixedRate = 15, timeUnit = TimeUnit.SECONDS)
    public void scheduleEvaluations() {
        metarDangerEvaluator.countMetarDangerFactorForAirports();
        tafDangerEvaluator.countTafDangerFactorForAirports(longTafService.getLatest());
        tafDangerEvaluator.countTafDangerFactorForAirports(shortTafService.getLatest());
        sigmetDangerEvaluator.countSigmetDangerFactorForAirports();
        log.info("Danger evaluation completed successfully.");
    }
}


