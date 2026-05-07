import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormCheckComponent, FormCheckInputDirective, RowComponent, TableDirective } from '@coreui/angular';

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
  isAdding: boolean = false;

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
    this.isAdding = false;
  }

  cancelEdit() {
    if (this.isAdding && this.editingId !== null) {
      this.deleteAirport(this.editingId);
    }
    this.editingId = null;
    this.editDraft = null;
    this.isAdding = false;
  }

  deleteAirport(id: number) {
    this.airports = this.airports.filter(a => a.id !== id);
  }

  onKeyPress(event: KeyboardEvent, currentValue: any) {
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);
    const valueStr = String(currentValue || '');

    // Allow digits (0-9)
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }

    // Allow minus sign only at the beginning
    if (char === '-') {
      const selectionStart = (event.target as HTMLInputElement).selectionStart;
      if (selectionStart === 0 && !valueStr.includes('-')) {
        return true;
      }
      event.preventDefault();
      return false;
    }

    // Allow dot, but not if it's the second dot or if it would be consecutive
    if (char === '.') {
      if (valueStr.includes('.')) {
        event.preventDefault();
        return false;
      }

      const selectionStart = (event.target as HTMLInputElement).selectionStart;
      // Check for consecutive dots if we were to allow multiple,
      // but since we only allow one, we just check if it's already there.
      // However, if the user specifically asked for "not 2 dots after each other",
      // maybe they imply multiple dots are allowed?
      // Usually coordinates have only one dot.

      // If the character before the cursor is a dot, prevent this one.
      if (selectionStart !== null && selectionStart > 0 && valueStr[selectionStart - 1] === '.') {
        event.preventDefault();
        return false;
      }
      return true;
    }

    // Prevent everything else
    event.preventDefault();
    return false;
  }

  addAirport() {
    this.isAdding = true;
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
