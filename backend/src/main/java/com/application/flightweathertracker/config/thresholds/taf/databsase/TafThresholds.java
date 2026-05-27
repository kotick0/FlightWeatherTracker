package com.application.flightweathertracker.config.thresholds.taf.databsase;

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
public class TafThresholds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double minVisibility;
    private Integer minCloudHeight;

    @Column(length = 50)
    private String maxCloudQuantity;

    @Column(length = 50)
    private String cancellingCloudType;

    private Integer maxWindSpeed;
    private Integer maxGustSpeed;
    private Integer minTempoProbability;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> cancellingPhenomenon;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> operationallySignificantPhenomena;
}
