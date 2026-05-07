import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TableDirective
} from '@coreui/angular';

interface Wind {
  unit: string;
  direction: string;
  directionDegrees: number;
  speed: number;
}

interface Visibility {
  unit: string;
  mainVisibility: string;
  value: number;
}

interface Cloud {
  quantity: string;
  height: number;
}

interface WeatherCondition {
  intensity: string;
  phenomenons: string[];
  valid: boolean;
}

interface MetarRecord {
  id: number;
  station: string;
  observedAt: string;
  fetchedAt: string;
  message: string;
  temperature: number;
  dewPoint: number;
  altimeter: number;
  isCavok: boolean;
  isCancelled: boolean;
  isCorrected: boolean;
  wind: Wind;
  visibility: Visibility;
  cloud: Cloud[];
  weatherCondition: WeatherCondition[];
}

@Component({
  selector: 'app-metar',
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    ButtonDirective
  ],
  templateUrl: './metar.component.html',
  styleUrl: './metar.component.scss',
})
export class MetarComponent implements OnInit {
  metarRecords: MetarRecord[] = [];
  selectedTimeRange: string = 'Last hour';

  setTimeRange(range: string) {
    this.selectedTimeRange = range;
    // Database/SQL action logic will be added here later
    console.log(`Selected time range: ${range}`);
  }

  ngOnInit() {
    // Mock data for now, replace with API call later
    this.metarRecords = [
      {
        id: 1,
        station: 'EPWA',
        observedAt: '2026-05-06T07:30:00',
        fetchedAt: '2026-05-06T07:35:00',
        message: 'METAR EPWA 060730Z 13004KT CAVOK 12/06 Q1021 NOSIG=',
        temperature: 12,
        dewPoint: 6,
        altimeter: 1021,
        isCavok: true,
        isCancelled: false,
        isCorrected: false,
        wind: { unit: 'KT', direction: 'South East', directionDegrees: 130, speed: 4 },
        visibility: { unit: 'km', mainVisibility: '>10km', value: 10 },
        cloud: [],
        weatherCondition: []
      }
      // Add more mock records as needed
    ];
  }
}
