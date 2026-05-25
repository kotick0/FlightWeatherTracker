import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormControlDirective,
  RowComponent,
  TableDirective
} from '@coreui/angular';
import {AirportService} from '../../../core/services/airport.service';
import {AirportView} from '../../../core/models/airport.model';

const NEW_AIRPORT_TEMP_ID = 0;

@Component({
  selector: 'app-airports',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    ButtonDirective,
    FormControlDirective,
    FormCheckComponent,
    FormCheckInputDirective
  ],
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.scss',
})
export class AirportsComponent implements OnInit {
  airports: AirportView[] = [];

  editingId: number | null = null;
  editDraft: AirportView | null = null;
  isAdding = false;
  submitted = false;

  constructor(private airportService: AirportService) {
  }

  ngOnInit(): void {
    this.loadAirports();
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

  startEdit(airport: AirportView) {
    this.submitted = false;
    this.editingId = airport.id;
    this.editDraft = { ...airport };
  }

  saveEdit() {
    this.submitted = true;
    if (!this.editDraft) {
      return;
    }

    if (!this.editDraft.name || !this.editDraft.icao || this.editDraft.icao.length !== 4 || !this.editDraft.city) {
      return;
    }

    const airportData: AirportView = {
      ...this.editDraft,
      latitude: Number(this.editDraft.latitude),
      longitude: Number(this.editDraft.longitude)
    };

    if (this.isAdding) {
      const {id: _id, ...createData} = airportData;
      this.airportService.create(createData).subscribe({
        next: () => {
          this.loadAirports();
          this.resetEditState();
        },
        error: (err) => {
          console.error('Failed to create airport', err);
        }
      });
      return;
    }

    this.airportService.update(airportData.id, airportData).subscribe({
      next: () => {
        this.loadAirports();
        this.resetEditState();
      },
      error: (err) => {
        console.error('Failed to update airport', err);
      }
    });
  }

  private sortById(airports: AirportView[]): AirportView[] {
    return [...airports].sort((a, b) => a.id - b.id);
  }

  private resetEditState() {
    this.editingId = null;
    this.editDraft = null;
    this.isAdding = false;
    this.submitted = false;
  }

  cancelEdit() {
    this.submitted = false;
    if (this.isAdding && this.editingId !== null) {
      this.airports = this.airports.filter(a => a.id !== this.editingId);
    }
    this.resetEditState();
  }

  deleteAirport(id: number) {
    if (id === NEW_AIRPORT_TEMP_ID) {
      return;
    }

    this.airportService.delete(id).subscribe({
      next: () => {
        this.loadAirports();
      },
      error: (err) => {
        console.error('Failed to delete airport', err);
      }
    });
  }

  onKeyPressNoNumbers(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode >= 48 && charCode <= 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onKeyPress(event: KeyboardEvent, currentValue: unknown) {
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);
    const valueStr = String(currentValue ?? '');

    if (charCode >= 48 && charCode <= 57) {
      return true;
    }

    if (char === '-') {
      const selectionStart = (event.target as HTMLInputElement).selectionStart;
      if (selectionStart === 0 && !valueStr.includes('-')) {
        return true;
      }
      event.preventDefault();
      return false;
    }

    if (char === '.') {
      if (valueStr.includes('.')) {
        event.preventDefault();
        return false;
      }

      const selectionStart = (event.target as HTMLInputElement).selectionStart;
      if (selectionStart !== null && selectionStart > 0 && valueStr[selectionStart - 1] === '.') {
        event.preventDefault();
        return false;
      }
      return true;
    }

    event.preventDefault();
    return false;
  }

  addAirport() {
    if (this.editingId !== null) {
      return;
    }
    this.isAdding = true;
    const newAirport: AirportView = {
      id: NEW_AIRPORT_TEMP_ID,
      name: '',
      icao: '',
      city: '',
      latitude: 0,
      longitude: 0,
      isMilitary: false
    };
    this.airports.unshift(newAirport);
    this.startEdit(newAirport);
  }
}
