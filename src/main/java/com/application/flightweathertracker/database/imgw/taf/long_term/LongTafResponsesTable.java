package com.application.flightweathertracker.database.imgw.taf.long_term;

import com.application.flightweathertracker.model.imgw.common.Cloud;
import com.application.flightweathertracker.model.imgw.common.Visibility;
import com.application.flightweathertracker.model.imgw.common.WeatherCondition;
import com.application.flightweathertracker.model.imgw.common.Wind;
import com.application.flightweathertracker.model.imgw.taf.Becmg;
import com.application.flightweathertracker.model.imgw.taf.Probs;
import com.application.flightweathertracker.model.imgw.taf.Tempos;
import com.application.flightweathertracker.model.imgw.taf.Validity;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "long_taf_responses", indexes = {
        @Index(name = "idx_long_taf_station_observed", columnList = "station, observed_at DESC"),
        @Index(, name = "idx_long_taf_fetched_at", columnList = "fetched_at DESC")
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
    // TODO: Dodać "turbulence" i "icings" kiedy się pojawią
}
