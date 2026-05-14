import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableDirective,
  ContainerComponent
} from '@coreui/angular';

interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  wind_gusts_10m: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
  cloud_cover: string;
  surface_pressure: string;
}

interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
  cloud_cover: number;
  surface_pressure: number;
}

interface HourlyUnits {
  time: string;
  temperature_2m: string;
  dew_point_2m: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  wind_gusts_10m: string;
  visibility: string;
  cloud_cover_low: string;
  cloud_cover_mid: string;
  cloud_cover_high: string;
  surface_pressure: string;
  snowfall: string;
  snow_depth: string;
  rain: string;
  showers: string;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
  dew_point_2m: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
  wind_gusts_10m: number[];
  visibility: number[];
  cloud_cover_low: number[];
  cloud_cover_mid: number[];
  cloud_cover_high: number[];
  surface_pressure: number[];
  snowfall: number[];
  snow_depth: number[];
  rain: number[];
  showers: number[];
}

interface SigmetRecord {
  id: number;
  fetchedAt: string;
  latitude: number;
  longitude: number;
  timezone: string;
  current_units: CurrentUnits;
  current: Current;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}

@Component({
  selector: 'app-sigmet',
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    ContainerComponent
  ],
  templateUrl: './sigmet.component.html',
  styleUrl: './sigmet.component.scss',
})
export class SigmetComponent implements OnInit {
  sigmetRecords: SigmetRecord[] = [];

  ngOnInit() {
    // Mock data for now, replace with API call later
    this.sigmetRecords = [
      {
        id: 1,
        fetchedAt: '2026-05-08T09:00:00',
        latitude: 52.2297,
        longitude: 21.0122,
        timezone: 'Europe/Warsaw',
        current_units: {
          time: 'iso8601',
          interval: 'seconds',
          temperature_2m: '°C',
          wind_speed_10m: 'km/h',
          wind_direction_10m: '°',
          wind_gusts_10m: 'km/h',
          precipitation: 'mm',
          rain: 'mm',
          showers: 'mm',
          snowfall: 'cm',
          cloud_cover: '%',
          surface_pressure: 'hPa'
        },
        current: {
          time: '2026-05-08T09:00',
          interval: 900,
          temperature_2m: 15.5,
          wind_speed_10m: 10.2,
          wind_direction_10m: 180,
          wind_gusts_10m: 15.4,
          precipitation: 0.0,
          rain: 0.0,
          showers: 0.0,
          snowfall: 0.0,
          cloud_cover: 20,
          surface_pressure: 1013.2
        },
        hourly_units: {
          time: 'iso8601',
          temperature_2m: '°C',
          dew_point_2m: '°C',
          wind_speed_10m: 'km/h',
          wind_direction_10m: '°',
          wind_gusts_10m: 'km/h',
          visibility: 'm',
          cloud_cover_low: '%',
          cloud_cover_mid: '%',
          cloud_cover_high: '%',
          surface_pressure: 'hPa',
          snowfall: 'cm',
          snow_depth: 'm',
          rain: 'mm',
          showers: 'mm'
        },
        hourly: {
          time: ['2026-05-08T09:00', '2026-05-08T10:00'],
          temperature_2m: [15.5, 16.2],
          dew_point_2m: [8.5, 8.7],
          wind_speed_10m: [10.2, 11.5],
          wind_direction_10m: [180, 190],
          wind_gusts_10m: [15.4, 17.1],
          visibility: [10000, 10000],
          cloud_cover_low: [10, 15],
          cloud_cover_mid: [5, 10],
          cloud_cover_high: [0, 0],
          surface_pressure: [1013.2, 1012.8],
          snowfall: [0, 0],
          snow_depth: [0, 0],
          rain: [0, 0],
          showers: [0, 0]
        }
      }
    ];
  }
}
