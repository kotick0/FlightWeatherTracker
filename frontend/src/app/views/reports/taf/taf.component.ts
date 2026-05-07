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
}

interface Validity {
  from: string;
  to: string;
}

interface TafRecord {
  id: number;
  station: string;
  observedAt: string;
  fetchedAt: string;
  message: string;
  isCavok: boolean;
  isCancelled: boolean;
  isCorrected: boolean;
  wind: Wind;
  visibility: Visibility;
  clouds: Cloud[];
  weatherConditions: WeatherCondition[];
  validity: Validity;
}

@Component({
  selector: 'app-taf',
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
  templateUrl: './taf.component.html',
  styleUrl: './taf.component.scss',
})
export class TafComponent implements OnInit {
  longTafRecords: TafRecord[] = [];
  shortTafRecords: TafRecord[] = [];
  selectedTafType: string = 'Long TAF';
  selectedLongTimeRange: string = 'Last hour';
  selectedShortTimeRange: string = 'Last hour';

  setTafType(type: string) {
    this.selectedTafType = type;
    console.log(`Selected TAF type: ${type}`);
  }

  setLongTimeRange(range: string) {
    this.selectedLongTimeRange = range;
    console.log(`Selected long TAF time range: ${range}`);
  }

  setShortTimeRange(range: string) {
    this.selectedShortTimeRange = range;
    console.log(`Selected short TAF time range: ${range}`);
  }

  ngOnInit() {
    this.longTafRecords = [
      {
        id: 1,
        station: 'EPWA',
        observedAt: '2026-05-06T07:30:00',
        fetchedAt: '2026-05-06T07:35:00',
        message: 'TAF EPWA 060500Z 0606/0712 13004KT CAVOK TX20/0613Z TN08/0603Z=',
        isCavok: true,
        isCancelled: false,
        isCorrected: false,
        wind: { unit: 'KT', direction: 'South East', directionDegrees: 130, speed: 4 },
        visibility: { unit: 'km', mainVisibility: '>10km', value: 10 },
        clouds: [],
        weatherConditions: [],
        validity: { from: '06-06:00', to: '07-12:00' }
      }
    ];

    this.shortTafRecords = [
      {
        id: 1,
        station: 'EPWA',
        observedAt: '2026-05-06T07:30:00',
        fetchedAt: '2026-05-06T07:35:00',
        message: 'TAF EPWA 060600Z 0606/0615 13004KT CAVOK=',
        isCavok: true,
        isCancelled: false,
        isCorrected: false,
        wind: { unit: 'KT', direction: 'South East', directionDegrees: 130, speed: 4 },
        visibility: { unit: 'km', mainVisibility: '>10km', value: 10 },
        clouds: [],
        weatherConditions: [],
        validity: { from: '06-06:00', to: '06-15:00' }
      }
    ];
  }
}
