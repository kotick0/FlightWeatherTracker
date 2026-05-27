package com.application.flightweathertracker.config.thresholds.sigmet.database;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.util.List;

@Entity
@Table()
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SigmetThresholds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer minFlightLevel;
    private Integer maxFlightLevel;

    @Column(length = 50)
    private String maxIntensity;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> wmoOperationallySignificant;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> wmoCancelling;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> phenomenaOperationallySignificant;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> phenomenaCancelling;
}
