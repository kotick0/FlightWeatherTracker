import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  RowComponent,
  TableDirective
} from '@coreui/angular';

interface Airport {
  id: number;
  name: string;
  icao: string;
  city: string;
  latitude: number;
  longitude: number;
  isMilitary: boolean;
}

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
export class AirportsComponent {
  airports: Airport[] = [];

  editingId: number | null = null;
  editDraft: Airport | null = null;

  startEdit(airport: Airport) {
    this.editingId = airport.id;
    this.editDraft = { ...airport };
  }

  saveEdit() {
    if (this.editDraft) {
      const index = this.airports.findIndex(a => a.id === this.editDraft!.id);
      if (index !== -1) {
        this.airports[index] = { ...this.editDraft };
      }
    }
    this.editingId = null;
    this.editDraft = null;
  }

  cancelEdit() {
    this.editingId = null;
    this.editDraft = null;
  }

  deleteAirport(id: number) {
    this.airports = this.airports.filter(a => a.id !== id);
  }

  addAirport() {
    const newId = this.airports.length > 0 ? Math.max(...this.airports.map(a => a.id)) + 1 : 1;
    const newAirport: Airport = {
      id: newId,
      name: '',
      icao: '',
      city: '',
      latitude: 0,
      longitude: 0,
      isMilitary: false
    };
    this.airports.push(newAirport);
    this.startEdit(newAirport);
  }
}
