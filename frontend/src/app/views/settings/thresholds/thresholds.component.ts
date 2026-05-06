import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-thresholds',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent],
  templateUrl: './thresholds.component.html',
  styleUrl: './thresholds.component.scss',
})
export class ThresholdsComponent {
}
