package com.application.flightweathertracker.config.thresholds.metar.database;


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
public class MetarThresholds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double minVisibility;
    private Integer minCloudHeight;

    @Column(length = 50)
    private String maxCloudQuantity;

    private Integer minAltimeter;
    private Integer maxTemperature;
    private Integer maxWindSpeed;
    private Integer maxGustSpeed;

    @Column(length = 50)
    private String maxWeatherIntensity;

    private Boolean windShear;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> cancellingPhenomenon;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> operationallySignificantPhenomena;
}
