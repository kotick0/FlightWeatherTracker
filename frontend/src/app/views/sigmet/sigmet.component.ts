import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeComponent, CardBodyComponent, CardComponent, CardHeaderComponent, TableDirective} from '@coreui/angular';
import {SigmetService} from '../../core/services/sigmet.service';
import {SigmetView} from '../../core/models/sigmet.model';

@Component({
  selector: 'app-sigmet',
  templateUrl: './sigmet.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, CardHeaderComponent, CardBodyComponent,
    TableDirective, BadgeComponent
  ]
})
export class SigmetComponent implements OnInit {

  sigmets: SigmetView[] = [];
  loading = true;
  error: string | null = null;

  constructor(private sigmetService: SigmetService) {
  }

  ngOnInit(): void {
    this.sigmetService.getAll().subscribe({
      next: data => {
        this.sigmets = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch SIGMET data';
        this.loading = false;
      }
    });
  }
}
