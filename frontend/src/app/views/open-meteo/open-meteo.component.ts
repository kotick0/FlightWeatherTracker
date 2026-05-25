import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from '@coreui/angular';
import {OpenMeteoService} from '../../core/services/open-meteo.service';
import {OpenMeteoView} from '../../core/models/open-meteo.model';

@Component({
  selector: 'app-open-meteo',
  templateUrl: './open-meteo.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, CardHeaderComponent, CardBodyComponent
  ]
})
export class OpenMeteoComponent implements OnInit {

  data: OpenMeteoView | null = null;
  loading = true;
  error: string | null = null;

  constructor(private openMeteoService: OpenMeteoService) {
  }

  ngOnInit(): void {
    this.openMeteoService.getLatest().subscribe({
      next: (data: OpenMeteoView) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch Open-Meteo data';
        this.loading = false;
      }
    });
  }
}
