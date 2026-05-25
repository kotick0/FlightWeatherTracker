package com.application.flightweathertracker.api;

import java.time.LocalDateTime;
import java.util.List;

public final class ReportQuerySupport {

    private ReportQuerySupport() {
    }

    public static int normalizeHours(int hours) {
        return Math.max(1, hours);
    }

    public static LocalDateTime fetchedAfter(int hours) {
        return LocalDateTime.now().minusHours(normalizeHours(hours));
    }

    public static boolean hasIcaoFilter(List<String> icaos) {
        return icaos != null && !icaos.isEmpty();
    }

    public static List<String> normalizeIcaos(List<String> icaos) {
        if (icaos == null) {
            return List.of();
        }
        return icaos.stream()
                .map(code -> code == null ? "" : code.trim().toUpperCase())
                .filter(code -> !code.isEmpty())
                .distinct()
                .toList();
    }
}
