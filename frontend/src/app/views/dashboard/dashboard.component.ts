import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  RowComponent,
  TableDirective
} from '@coreui/angular';
import { AirportService } from '../../core/services/airport.service';
import { AirportView } from '../../core/models/airport.model';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    FormCheckComponent,
    FormCheckInputDirective
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  airports: AirportView[] = [];
  private refreshIntervalId: any;

  constructor(private airportService: AirportService) {}

  ngOnInit(): void {
    this.loadAirports();
    this.startRefreshInterval();
  }

  ngOnDestroy(): void {
    this.stopRefreshInterval();
  }

  loadAirports(): void {
    this.airportService.getAll().subscribe({
      next: (data) => {
        this.airports = this.sortById(data);
      },
      error: (err) => {
        console.error('Failed to load airports', err);
      }
    });
  }

  private startRefreshInterval(): void {
    this.stopRefreshInterval();
    this.refreshIntervalId = setInterval(() => {
      this.loadAirports();
    }, 15000);
  }

  private stopRefreshInterval(): void {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
    }
  }

  private sortById(airports: AirportView[]): AirportView[] {
    return [...airports].sort((a, b) => a.id - b.id);
  }

  getDangerFactorClass(factor: number | undefined | null): string {
    if (factor === undefined || factor === null) {
      return '';
    }
    if (factor <= 40) {
      return 'risk-low';
    }
    if (factor >= 41 && factor <= 59) {
      return 'risk-medium';
    }
    if (factor >= 60) {
      return 'risk-high';
    }
    return '';
  }
}
