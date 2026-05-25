import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeComponent, CardBodyComponent, CardComponent, CardHeaderComponent, TableDirective} from '@coreui/angular';
import {ShortTafService} from '../../core/services/short-taf.service';
import {TafView} from '../../core/models/taf.model';

@Component({
  selector: 'app-short-taf',
  templateUrl: './short-taf.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, CardHeaderComponent, CardBodyComponent,
    TableDirective, BadgeComponent
  ]
})
export class ShortTafComponent implements OnInit {

  tafs: TafView[] = [];
  loading = true;
  error: string | null = null;

  constructor(private tafService: ShortTafService) {
  }

  ngOnInit(): void {
    this.tafService.getAll().subscribe({
      next: data => {
        this.tafs = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch Short TAF data';
        this.loading = false;
      }
    });
  }
}
