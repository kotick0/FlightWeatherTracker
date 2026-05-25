import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BadgeComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableDirective
} from '@coreui/angular';
import {SigmetService} from '../../../core/services/sigmet.service';
import {SigmetView} from '../../../core/models/sigmet.model';

@Component({
  selector: 'app-sigmet',
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    BadgeComponent
  ],
  templateUrl: './sigmet.component.html',
  styleUrl: './sigmet.component.scss',
})
export class SigmetComponent implements OnInit {
  sigmetRecords: SigmetView[] = [];
  loading = false;
  error: string | null = null;

  constructor(private sigmetService: SigmetService) {
  }

  ngOnInit() {
    this.loadRecords();
  }

  private loadRecords(): void {
    this.loading = true;
    this.error = null;

    this.sigmetService.getAll().subscribe({
      next: (data) => {
        this.sigmetRecords = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch SIGMET records';
        this.sigmetRecords = [];
        this.loading = false;
      }
    });
  }
}
