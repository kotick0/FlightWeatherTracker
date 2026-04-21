package com.application.flightweathertracker.database.imgw.metar;

import com.application.flightweathertracker.model.imgw.common.Cloud;
import com.application.flightweathertracker.model.imgw.common.Visibility;
import com.application.flightweathertracker.model.imgw.common.WeatherCondition;
import com.application.flightweathertracker.model.imgw.common.Wind;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "metar_responses", indexes = {
        @Index(name = "idx_metar_station_observed", columnList = "station, observed_at DESC"),
        @Index(name = "idx_metar_fetched_at", columnList = "fetched_at DESC")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MetarResponsesTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 4)
    private String station;

    @Column(nullable = false)
    private LocalDateTime observedAt;

    @Column(nullable = false)
    private LocalDateTime fetchedAt;

    @Column(columnDefinition = "TEXT")
    private String message;

    private Integer temperature;

    private Integer dewPoint;

    private Integer altimeter;

    private Boolean isCavok;

    private Boolean isCancelled;

    private Boolean isCorrected;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private Wind wind;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private Visibility visibility;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<Cloud> clouds;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<WeatherCondition> weatherConditions;
}

