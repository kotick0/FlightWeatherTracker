import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class SigmetComponent implements OnInit, OnDestroy {
  sigmetRecords: SigmetView[] = [];
  loading = false;
  error: string | null = null;
  private refreshIntervalId: any;

  constructor(private sigmetService: SigmetService) {
  }

  ngOnInit() {
    this.loadRecords();
  }

  ngOnDestroy() {
    this.stopRefreshInterval();
  }

  private startRefreshInterval() {
    this.stopRefreshInterval();
    this.refreshIntervalId = setInterval(() => {
      this.loadRecords(true);
    }, 15000);
  }

  private stopRefreshInterval() {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
    }
  }

  private loadRecords(silent: boolean = false): void {
    if (!silent) {
      this.error = null;
      this.startRefreshInterval();
      this.loading = true;
    }

    this.sigmetService.getAll().subscribe({
      next: (data) => {
        this.sigmetRecords = data.sort((a, b) => new Date(b.fetchedAt || 0).getTime() - new Date(a.fetchedAt || 0).getTime());
        this.loading = false;
      },
      error: () => {
        if (!silent) {
          this.error = 'Failed to fetch SIGMET records';
          this.sigmetRecords = [];
        }
        this.loading = false;
      }
    });
  }
}
