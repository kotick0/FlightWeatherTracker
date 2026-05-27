package com.application.flightweathertracker.imgw.sigmet;

import com.application.flightweathertracker.config.airports.database.AirportsRepository;
import com.application.flightweathertracker.config.airports.database.Airports;
import com.application.flightweathertracker.imgw.ImgwApiClient;
import com.application.flightweathertracker.imgw.ImgwJsonDeserializer;
import com.application.flightweathertracker.imgw.sigmet.database.SigmetResponsesRepository;
import com.application.flightweathertracker.imgw.sigmet.database.SigmetResponses;
import com.application.flightweathertracker.imgw.sigmet.model.ImgwSigmet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.Polygon;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImgwSigmetService {
    private final ImgwApiClient imgwApiClient;
    private final ImgwJsonDeserializer imgwJsonDeserializer;
    private final SigmetResponsesRepository sigmetResponsesRepository;
    private final GeometryFactory geometryFactory;
    private final AirportsRepository airportsRepository;

    public void saveImgwSigmetResponse() {
        String imgwSigmetResponseJson = imgwApiClient.fetchAllSigmet();
        Map<String, ImgwSigmet> deserializedSigmetResponse = imgwJsonDeserializer.deserializeSigmets(imgwSigmetResponseJson);
        for (ImgwSigmet imgwSigmet : deserializedSigmetResponse.values()) {
            if (imgwSigmet != null) {
                try {
                    SigmetResponses responseRecord = SigmetResponses.builder()
                            .fetchedAt(LocalDateTime.now())
                            .TT(imgwSigmet.TT())
                            .AA(imgwSigmet.AA())
                            .ii(imgwSigmet.ii())
                            .is_cnl(imgwSigmet.is_cnl())
                            .BBB(imgwSigmet.BBB())
                            .YYGGgg(imgwSigmet.YYGGgg())
                            .valid_from(imgwSigmet.valid_from())
                            .cnl_id(imgwSigmet.cnl_id())
                            .message(imgwSigmet.message())
                            .geojson(imgwSigmet.geojson())
                            .Transmission_time(imgwSigmet.Transmission_time())
                            .valid_to(imgwSigmet.valid_to())
                            .is_valid(imgwSigmet.is_valid())
                            .cnl_valid(imgwSigmet.cnl_valid())
                            .CCCC(imgwSigmet.CCCC())
                            .build();
                    sigmetResponsesRepository.save(responseRecord);
                } catch (DataIntegrityViolationException e) {
                    log.warn("SIGMET already exists: message={}", imgwSigmet.message());
                }
            }
            log.info("Sigmet responses successfully saved to the database");
        }
    }

    public boolean isAirportInSigmet(ImgwSigmet sigmet, String icao) {
        if (sigmet != null) {
            Airports airport = airportsRepository.findByIcao(icao);

            List<List<Double>> coordinates = sigmet.geojson().features().getFirst().geometry().coordinates().getFirst();
            List<Coordinate> coords = new ArrayList<>();
            for (List<Double> coordinateSet : coordinates) {
                coords.add(new Coordinate(coordinateSet.get(0), coordinateSet.get(1)));
            }
            Coordinate[] coordinatesArray = coords.toArray(new Coordinate[0]);
            Polygon polygon = geometryFactory.createPolygon(coordinatesArray);

            double longitude = airport.getLongitude();
            double latitude = airport.getLatitude();

            Point airportPoint = geometryFactory.createPoint(new Coordinate(longitude, latitude));

            return polygon.covers(airportPoint);
        } else {
            log.error("Provided SIGMET was null for ICAO: {}", icao);
            throw new RuntimeException("Provided SIGMET was null for ICAO: " + icao);
        }
    }
}
