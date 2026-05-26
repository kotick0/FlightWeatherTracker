package com.application.flightweathertracker.imgw.metar.database;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.Visibility;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.application.flightweathertracker.imgw.common.model.Wind;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "metar_responses", indexes = {
        @Index(name = "idx_metar_station_observed", columnList = "station, observed_at DESC"),
        @Index(name = "idx_metar_fetched_at", columnList = "fetched_at DESC"),
}, uniqueConstraints = {
        @UniqueConstraint(columnNames = {"station", "observed_at"})
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MetarResponses {

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
    private List<Cloud> cloud;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<WeatherCondition> weatherCondition;
}

