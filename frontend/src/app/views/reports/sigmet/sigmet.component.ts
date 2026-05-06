import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-sigmet',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent],
  templateUrl: './sigmet.component.html',
  styleUrl: './sigmet.component.scss',
})
export class SigmetComponent {
}
