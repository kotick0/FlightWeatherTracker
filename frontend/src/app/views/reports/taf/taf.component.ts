import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-taf',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent],
  templateUrl: './taf.component.html',
  styleUrl: './taf.component.scss',
})
export class TafComponent {
}
