import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-metar',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent],
  templateUrl: './metar.component.html',
  styleUrl: './metar.component.scss',
})
export class MetarComponent {
}
