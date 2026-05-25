import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeComponent, CardBodyComponent, CardComponent, CardHeaderComponent, TableDirective} from '@coreui/angular';
import {LongTafService} from '../../core/services/long-taf.service';
import {TafView} from '../../core/models/taf.model';

@Component({
  selector: 'app-long-taf',
  templateUrl: './long-taf.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, CardHeaderComponent, CardBodyComponent,
    TableDirective, BadgeComponent
  ]
})
export class LongTafComponent implements OnInit {

  tafs: TafView[] = [];
  loading = true;
  error: string | null = null;

  constructor(private tafService: LongTafService) {
  }

  ngOnInit(): void {
    this.tafService.getAll().subscribe({
      next: data => {
        this.tafs = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch Long TAF data';
        this.loading = false;
      }
    });
  }
}
