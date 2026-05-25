package com.application.flightweathertracker.api;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.application.flightweathertracker.api.ReportQuerySupport.normalizeIcaos;

public final class ReportQueryParams {

    private ReportQueryParams() {
    }

    public static List<String> mergeStationCodes(String icaosCsv, List<String> icaoRepeated) {
        List<String> merged = new ArrayList<>();
        if (icaosCsv != null && !icaosCsv.isBlank()) {
            merged.addAll(normalizeIcaos(Arrays.asList(icaosCsv.split(","))));
        }
        if (icaoRepeated != null) {
            merged.addAll(normalizeIcaos(icaoRepeated));
        }
        return merged.stream().distinct().toList();
    }

    public static int resolveHours(Integer hours) {
        return hours != null ? ReportQuerySupport.normalizeHours(hours) : 1;
    }
}
