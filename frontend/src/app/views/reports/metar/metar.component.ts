import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-metar',
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective
  ],
  templateUrl: './metar.component.html',
  styleUrl: './metar.component.scss',
})
export class MetarComponent implements OnInit {
  readonly icaoStorageKey = REPORTS_FILTER_KEYS.metar.selectedIcaos;

  metarRecords: MetarView[] = [];
  hours = 1;
  selectedIcaos: string[] = [];
  loading = false;
  error: string | null = null;

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
  }

  private loadRecords(): void {
    this.error = null;

    if (this.selectedIcaos.length === 0) {
      this.metarRecords = [];
      this.loading = false;
      return;
    }

    this.loading = true;

    this.metarService.getFiltered(this.selectedIcaos, this.hours).subscribe({
      next: (data) => {
        this.metarRecords = filterRecordsByStations(data, this.selectedIcaos);
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch METAR records';
        this.metarRecords = [];
        this.loading = false;
      }
    });
  }
}
