package com.application.flightweathertracker.config.airports.database;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Airports {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String icao;
    private String city;
    private double latitude;
    private double longitude;
    private boolean isMILITARY;
}
