package com.application.flightweathertracker.imgw.taf.database.long_term;

import com.application.flightweathertracker.imgw.common.model.Cloud;
import com.application.flightweathertracker.imgw.common.model.Visibility;
import com.application.flightweathertracker.imgw.common.model.WeatherCondition;
import com.application.flightweathertracker.imgw.common.model.Wind;
import com.application.flightweathertracker.imgw.taf.model.Becmg;
import com.application.flightweathertracker.imgw.taf.model.Probs;
import com.application.flightweathertracker.imgw.taf.model.Tempos;
import com.application.flightweathertracker.imgw.taf.model.Validity;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;
import tools.jackson.databind.JsonNode;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "long_taf_responses", indexes = {
        @Index(name = "idx_long_taf_station_observed", columnList = "station, observed_at DESC"),
        @Index(name = "idx_long_taf_fetched_at", columnList = "fetched_at DESC")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LongTafResponsesTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime fetchedAt;

    @Column(nullable = false, length = 4)
    private String station;

    @Column(nullable = false)
    private LocalDateTime observedAt;

    @Column(columnDefinition = "TEXT")
    private String message;

    private Boolean isCAVOK;

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

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private Validity validity;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<Tempos> tempos;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<Probs> probs;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<Becmg> BECMGs;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<JsonNode> turbulence;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<JsonNode> icings;
    // TODO: Zmienić "turbulence" i "icings" na modele kiedy się pojawią
}
