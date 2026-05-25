import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeComponent, CardBodyComponent, CardComponent, CardHeaderComponent, TableDirective} from '@coreui/angular';
import {AirportService} from '../../core/services/airport.service';
import {AirportView} from '../../core/models/airport.model';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, CardHeaderComponent, CardBodyComponent,
    TableDirective, BadgeComponent
  ]
})
export class AirportsComponent implements OnInit {

  airports: AirportView[] = [];
  loading = true;
  error: string | null = null;

  constructor(private airportService: AirportService) {
  }

  ngOnInit(): void {
    this.airportService.getAll().subscribe({
      next: data => {
        this.airports = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch airports';
        this.loading = false;
      }
    });
  }
}
