package com.application.flightweathertracker.database.open_meteo;

import com.application.flightweathertracker.model.open_meteo.Current;
import com.application.flightweathertracker.model.open_meteo.CurrentUnits;
import com.application.flightweathertracker.model.open_meteo.Hourly;
import com.application.flightweathertracker.model.open_meteo.HourlyUnits;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;

@Entity
@Table(name = "open_meteo_responses", indexes = {
        @Index(name = "idx_open_meteo_fetched_at", columnList = "fetched_at DESC")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OpenMeteoResponsesTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime fetchedAt;

    private Double latitude;

    private Double longitude;

    private String timezone;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private CurrentUnits current_units;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private Current current;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private HourlyUnits hourly_units;

    @Type(JsonType.class)
    @Column(columnDefinition = "jsonb")
    private Hourly hourly;
}
