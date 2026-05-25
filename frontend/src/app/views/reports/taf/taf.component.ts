import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {
  REPORTS_FILTER_KEYS,
  ReportsFilterPreferencesService
} from '../../../core/services/reports-filter-preferences.service';
import {LongTafService} from '../../../core/services/long-taf.service';
import {ShortTafService} from '../../../core/services/short-taf.service';
import {TafView} from '../../../core/models/taf.model';
import {forkJoin} from 'rxjs';
import {filterRecordsByStations} from '../../../core/utils/reports-query.util';
import {AirportIcaoMultiselectComponent} from '../../../shared/components/airport-icao-multiselect/airport-icao-multiselect.component';
import {ReportHoursInputComponent} from '../../../shared/components/report-hours-input/report-hours-input.component';

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
    ButtonDirective,
    AirportIcaoMultiselectComponent,
    ReportHoursInputComponent,
  ],
  templateUrl: './taf.component.html',
  styleUrl: './taf.component.scss',
})
export class TafComponent implements OnInit {
  readonly icaoStorageKey = REPORTS_FILTER_KEYS.taf.selectedIcaos;

  longTafRecords: TafView[] = [];
  shortTafRecords: TafView[] = [];
  selectedTafType = 'Long TAF';
  longHours = 1;
  shortHours = 1;
  selectedIcaos: string[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private preferences: ReportsFilterPreferencesService,
    private longTafService: LongTafService,
    private shortTafService: ShortTafService,
  ) {
  }

  get activeHours(): number {
    return this.selectedTafType === 'Long TAF' ? this.longHours : this.shortHours;
  }

  setTafType(type: string) {
    this.selectedTafType = type;
    this.preferences.setTafType(type);
  }

  onActiveHoursChange(hours: number) {
    if (this.selectedTafType === 'Long TAF') {
      this.longHours = hours;
      this.preferences.setTafLongHours(hours);
    } else {
      this.shortHours = hours;
      this.preferences.setTafShortHours(hours);
    }
    this.loadRecords();
  }

  onSelectedIcaosChange(icaos: string[]) {
    this.selectedIcaos = icaos;
    this.loadRecords();
  }

  ngOnInit() {
    this.selectedTafType = this.preferences.getTafType();
    this.longHours = this.preferences.getTafLongHours();
    this.shortHours = this.preferences.getTafShortHours();
  }

  formatValidity(validity: TafView['validity']): string {
    if (!validity) {
      return '—';
    }
    return `${validity.startDay}/${validity.startHour} – ${validity.endDay}/${validity.endHour}`;
  }

  private loadRecords(): void {
    this.error = null;

    if (this.selectedIcaos.length === 0) {
      this.longTafRecords = [];
      this.shortTafRecords = [];
      this.loading = false;
      return;
    }

    this.loading = true;

    forkJoin({
      long: this.longTafService.getFiltered(this.selectedIcaos, this.longHours),
      short: this.shortTafService.getFiltered(this.selectedIcaos, this.shortHours),
    }).subscribe({
      next: ({long, short}) => {
        this.longTafRecords = filterRecordsByStations(long, this.selectedIcaos);
        this.shortTafRecords = filterRecordsByStations(short, this.selectedIcaos);
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch TAF records';
        this.longTafRecords = [];
        this.shortTafRecords = [];
        this.loading = false;
      }
    });
  }
}
