package com.application.flightweathertracker.imgw.sigmet.database;

import com.application.flightweathertracker.imgw.sigmet.model.FeatureCollection;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.Instant;
import java.time.LocalDateTime;

@Entity
@Table(name = "sigmet_responses", indexes = {
        @Index(name = "idx_sigmet_fetched_at", columnList = "fetched_at DESC")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SigmetResponsesTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime fetchedAt;

    private String TT;

    private String AA;

    private String ii;

    private Boolean is_cnl;

    private String BBB;

    private Integer YYGGgg;

    private Instant valid_from;

    private String cnl_id;

    @Column(columnDefinition = "TEXT")
    private String message;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private FeatureCollection geojson;

    private Instant Transmission_time;

    private Instant valid_to;

    private Boolean is_valid;

    private String sigmet_id;

    private String cnl_valid;

    @Column(nullable = false, length = 4)
    private String CCCC;

}
