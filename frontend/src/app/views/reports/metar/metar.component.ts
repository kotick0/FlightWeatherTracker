import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableDirective
} from '@coreui/angular';
import {
  REPORTS_FILTER_KEYS,
  ReportsFilterPreferencesService
} from '../../../core/services/reports-filter-preferences.service';
import {MetarService} from '../../../core/services/metar.service';
import {MetarView} from '../../../core/models/metar.model';
import {filterRecordsByStations} from '../../../core/utils/reports-query.util';
import {AirportIcaoMultiselectComponent} from '../../../shared/components/airport-icao-multiselect/airport-icao-multiselect.component';
import {ReportHoursInputComponent} from '../../../shared/components/report-hours-input/report-hours-input.component';

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
    AirportIcaoMultiselectComponent,
    ReportHoursInputComponent,
  ],
  templateUrl: './metar.component.html',
  styleUrl: './metar.component.scss',
})
export class MetarComponent implements OnInit, OnDestroy {
  readonly icaoStorageKey = REPORTS_FILTER_KEYS.metar.selectedIcaos;

  metarRecords: MetarView[] = [];
  hours = 1;
  selectedIcaos: string[] = [];
  loading = false;
  error: string | null = null;
  private refreshIntervalId: any;

  constructor(
    private preferences: ReportsFilterPreferencesService,
    private metarService: MetarService,
  ) {
  }

  onHoursChange(hours: number) {
    this.hours = hours;
    this.preferences.setMetarHours(hours);
    this.loadRecords();
  }

  onSelectedIcaosChange(icaos: string[]) {
    this.selectedIcaos = icaos;
    this.loadRecords();
  }

  ngOnInit() {
    this.hours = this.preferences.getMetarHours();
    this.startRefreshInterval();
  }

  ngOnDestroy() {
    this.stopRefreshInterval();
  }

  private startRefreshInterval() {
    this.stopRefreshInterval();
    this.refreshIntervalId = setInterval(() => {
      this.loadRecords(true);
    }, 15000);
  }

  private stopRefreshInterval() {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
    }
  }

  private loadRecords(silent: boolean = false): void {
    if (!silent) {
      this.error = null;
      this.startRefreshInterval();
    }

    if (this.selectedIcaos.length === 0) {
      this.metarRecords = [];
      this.loading = false;
      return;
    }

    if (!silent) {
      this.loading = true;
    }

    this.metarService.getFiltered(this.selectedIcaos, this.hours).subscribe({
      next: (data) => {
        this.metarRecords = filterRecordsByStations(data, this.selectedIcaos);
        this.loading = false;
      },
      error: () => {
        if (!silent) {
          this.error = 'Failed to fetch METAR records';
          this.metarRecords = [];
        }
        this.loading = false;
      }
    });
  }
}
