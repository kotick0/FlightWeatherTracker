package com.application.flightweathertracker.imgw.sigmet.mapper;

import com.application.flightweathertracker.imgw.sigmet.database.SigmetResponsesTable;
import com.application.flightweathertracker.imgw.sigmet.model.Feature;
import com.application.flightweathertracker.imgw.sigmet.model.Properties;
import com.application.flightweathertracker.imgw.sigmet.view.SigmetFeatureView;
import com.application.flightweathertracker.imgw.sigmet.view.SigmetView;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SigmetMapper {

    public SigmetView map(SigmetResponsesTable e) {
        List<SigmetFeatureView> features = e.getGeojson() != null && e.getGeojson().features() != null
                ? e.getGeojson().features().stream().map(this::mapFeature).toList()
                : List.of();

        return new SigmetView(
                e.getId(),
                e.getFetchedAt() != null ? e.getFetchedAt().toString() : null,
                e.getCCCC(),
                e.getTT(),
                e.getAA(),
                e.getIi(),
                e.getBBB(),
                e.getYYGGgg(),
                e.getIs_cnl(),
                e.getCnl_id(),
                e.getCnl_valid(),
                e.getValid_from() != null ? e.getValid_from().toString() : null,
                e.getValid_to() != null ? e.getValid_to().toString() : null,
                e.getTransmission_time() != null ? e.getTransmission_time().toString() : null,
                e.getIs_valid(),
                e.getMessage(),
                features
        );
    }

    private SigmetFeatureView mapFeature(Feature f) {
        if (f == null) return null;
        String geometryType = f.geometry() != null ? f.geometry().type() : null;
        List<List<List<Double>>> coords = f.geometry() != null ? f.geometry().coordinates() : null;
        Properties p = f.properties();
        if (p == null) {
            return new SigmetFeatureView(geometryType, coords, null, null, null, null, null, null, null, null);
        }
        return new SigmetFeatureView(
                geometryType,
                coords,
                p.phenomenon(),
                p.phenomenon_description(),
                p.flight_level(),
                p.intensity(),
                p.observation_type(),
                p.movement_direction(),
                p.movement(),
                p.valid_str()
        );
    }
}