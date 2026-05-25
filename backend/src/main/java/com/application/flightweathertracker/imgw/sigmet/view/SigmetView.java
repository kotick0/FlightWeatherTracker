package com.application.flightweathertracker.imgw.sigmet.view;

import java.util.List;

public record SigmetView(
        Long id,
        String fetchedAt,
        String station,             // CCCC
        String type,                // TT
        String area,                // AA
        String sequenceNumber,      // ii
        String bbb,
        Integer timeGroup,          // YYGGgg
        Boolean isCancelled,        // is_cnl
        String cancellationId,
        String cancellationValidPeriod,
        String validFrom,
        String validTo,
        String transmissionTime,
        Boolean isValid,
        String message,
        List<SigmetFeatureView> features
) {
}