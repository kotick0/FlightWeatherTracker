import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeComponent, CardBodyComponent, CardComponent, CardHeaderComponent, TableDirective} from '@coreui/angular';
import {MetarService} from '../../core/services/metar.service';
import {MetarView} from '../../core/models/metar.model';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, CardHeaderComponent, CardBodyComponent,
    TableDirective, BadgeComponent
  ]
})
export class MetarComponent implements OnInit {

  metars: MetarView[] = [];
  loading = true;
  error: string | null = null;

  constructor(private metarService: MetarService) {
  }

  ngOnInit(): void {
    this.metarService.getAll().subscribe({
      next: (data: MetarView[]) => {
        this.metars = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch METAR data';
        this.loading = false;
      }
    });
  }
}
