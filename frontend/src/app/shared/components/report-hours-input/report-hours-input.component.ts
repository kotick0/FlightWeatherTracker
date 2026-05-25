import {Component, input, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormControlDirective} from '@coreui/angular';
import {normalizeHoursValue} from '../../../core/utils/reports-query.util';

@Component({
  selector: 'app-report-hours-input',
  standalone: true,
  imports: [FormsModule, FormControlDirective],
  template: `
    <div class="report-hours-input d-flex align-items-center">
      <span class="me-1 text-nowrap small text-body-secondary">Past</span>
      <input
        cFormControl
        type="number"
        class="form-control form-control-sm bg-body"
        [ngModel]="hours()"
        (ngModelChange)="onHoursChange($event)"
        min="1"
        step="1"
        inputmode="numeric"
        (keypress)="onKeyPress($event)"
        [attr.aria-label]="'Look back ' + hours() + (hours() === 1 ? ' hour' : ' hours')"
      />
      <span class="ms-1 text-nowrap small text-body-secondary">{{ hours() === 1 ? 'hour' : 'hours' }}</span>
    </div>
  `,
  styles: `
    .report-hours-input input {
      width: 4.5rem;
    }
  `,
})
export class ReportHoursInputComponent {
  readonly hours = input(1);
  readonly hoursChange = output<number>();

  onHoursChange(value: number | string): void {
    this.hoursChange.emit(normalizeHoursValue(value));
  }

  onKeyPress(event: KeyboardEvent): boolean {
    const char = event.key;
    if (char.length === 1 && !/\d/.test(char)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
