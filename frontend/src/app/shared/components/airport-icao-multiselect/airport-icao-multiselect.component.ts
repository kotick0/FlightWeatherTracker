import {Component, HostListener, input, OnDestroy, OnInit, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCheckComponent, FormCheckInputDirective} from '@coreui/angular';
import {AirportService} from '../../../core/services/airport.service';
import {ReportsFilterPreferencesService} from '../../../core/services/reports-filter-preferences.service';
import {AirportView} from '../../../core/models/airport.model';

@Component({
  selector: 'app-airport-icao-multiselect',
  standalone: true,
  imports: [CommonModule, FormCheckComponent, FormCheckInputDirective],
  templateUrl: './airport-icao-multiselect.component.html',
  styleUrl: './airport-icao-multiselect.component.scss',
})
export class AirportIcaoMultiselectComponent implements OnInit, OnDestroy {
  readonly storageKey = input.required<string>();
  readonly selectedIcaosChange = output<string[]>();

  airports: AirportView[] = [];
  selectedIcaos: string[] = [];
  dropdownOpen = false;
  private refreshIntervalId: any;

  constructor(
    private airportService: AirportService,
    private preferences: ReportsFilterPreferencesService,
  ) {
  }

  ngOnInit(): void {
    this.loadAirports();
    this.startRefreshInterval();
  }

  ngOnDestroy(): void {
    this.stopRefreshInterval();
  }

  private startRefreshInterval(): void {
    this.stopRefreshInterval();
    this.refreshIntervalId = setInterval(() => {
      this.loadAirports(true);
    }, 15000);
  }

  private stopRefreshInterval(): void {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
    }
  }

  readonly selectionLabel = 'Select Airports...';

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isSelected(icao: string): boolean {
    return this.selectedIcaos.includes(icao.toUpperCase());
  }

  toggleIcao(icao: string): void {
    const code = icao.toUpperCase();
    const index = this.selectedIcaos.indexOf(code);
    if (index > -1) {
      this.selectedIcaos.splice(index, 1);
    } else {
      this.selectedIcaos.push(code);
    }
    this.persistSelection();
    this.selectedIcaosChange.emit([...this.selectedIcaos]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.dropdown-multiselect')) {
      return;
    }
    this.dropdownOpen = false;
  }

  private loadAirports(silent: boolean = false): void {
    this.airportService.getAll().subscribe({
      next: (data) => {
        this.airports = [...data].sort((a, b) => a.icao.localeCompare(b.icao));
        this.restoreSelection(silent);
      },
      error: (err) => {
        console.error('Failed to load airports', err);
      }
    });
  }

  private restoreSelection(silent: boolean = false): void {
    const stored = this.preferences.getStringArray(this.storageKey());
    const validIcaos = new Set(this.airports.map(a => a.icao));
    const newSelected = stored
      .map(icao => icao.toUpperCase())
      .filter(icao => validIcaos.has(icao));

    const selectionChanged = this.selectedIcaos.length !== newSelected.length ||
      !this.selectedIcaos.every((val, index) => val === newSelected[index]);

    this.selectedIcaos = newSelected;

    if (!silent || selectionChanged) {
      this.selectedIcaosChange.emit([...this.selectedIcaos]);
    }
  }

  private persistSelection(): void {
    this.preferences.setStringArray(this.storageKey(), this.selectedIcaos);
  }
}
