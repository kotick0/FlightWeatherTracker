package com.application.flightweathertracker.imgw.taf.mapper;

import com.application.flightweathertracker.imgw.common.mapper.CommonMapper;
import com.application.flightweathertracker.imgw.taf.database.long_term.LongTafResponsesTable;
import com.application.flightweathertracker.imgw.taf.model.Becmg;
import com.application.flightweathertracker.imgw.taf.model.Probs;
import com.application.flightweathertracker.imgw.taf.model.Tempos;
import com.application.flightweathertracker.imgw.taf.model.Validity;
import com.application.flightweathertracker.imgw.taf.view.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LongTafMapper {

    private final CommonMapper common;

    public LongTafMapper(CommonMapper common) {
        this.common = common;
    }

    public TafView map(LongTafResponsesTable e) {
        return new TafView(
                e.getId(),
                e.getStation(),
                e.getObservedAt() != null ? e.getObservedAt().toString() : null,
                e.getFetchedAt() != null ? e.getFetchedAt().toString() : null,
                e.getMessage(),
                e.getIsCAVOK(),
                e.getIsCancelled(),
                e.getIsCorrected(),
                common.mapWind(e.getWind()),
                common.mapVisibility(e.getVisibility()),
                common.mapClouds(e.getClouds()),
                common.mapConditions(e.getWeatherConditions()),
                mapValidity(e.getValidity()),
                mapTempos(e.getTempos()),
                mapProbs(e.getProbs()),
                mapBecmgs(e.getBECMGs())
        );
    }

    private ValidityView mapValidity(Validity v) {
        if (v == null) return null;
        return new ValidityView(v.startDay(), v.startHour(), v.endDay(), v.endHour());
    }

    private List<TempoView> mapTempos(List<Tempos> tempos) {
        if (tempos == null) return List.of();
        return tempos.stream().map(t -> new TempoView(
                t.cavok(),
                t.probability(),
                mapValidity(t.validity()),
                t.type(),
                common.mapClouds(t.clouds()),
                common.mapConditions(t.weatherConditions())
        )).toList();
    }

    private List<ProbView> mapProbs(List<Probs> probs) {
        if (probs == null) return List.of();
        return probs.stream().map(p -> new ProbView(
                p.cavok(),
                p.probability(),
                mapValidity(p.validity()),
                p.type(),
                common.mapVisibility(p.visibility()),
                common.mapClouds(p.clouds()),
                common.mapConditions(p.weatherConditions())
        )).toList();
    }

    private List<BecmgView> mapBecmgs(List<Becmg> becmgs) {
        if (becmgs == null) return List.of();
        return becmgs.stream().map(b -> new BecmgView(
                b.cavok(),
                mapValidity(b.validity()),
                b.type(),
                common.mapWind(b.wind()),
                common.mapClouds(b.clouds()),
                common.mapConditions(b.weatherConditions())
        )).toList();
    }
}