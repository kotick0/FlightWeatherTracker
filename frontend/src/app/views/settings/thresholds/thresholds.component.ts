import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormLabelDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  RowComponent,
  ModalModule
} from '@coreui/angular';

interface WeatherPhenomenon {
  cancelling: string[];
  operationallySignificant: string[];
}

interface TafThresholds {
  minVisibility: number;
  minCloudHeight: number;
  maxCloudQuantity: string;
  cancellingTempoCloudType: string;
  maxWindSpeed: number;
  maxGust: number;
  minTempoProbability: number;
  weatherConditions: WeatherPhenomenon;
}

interface MetarThresholds {
  minVisibility: number;
  minCloudHeight: number;
  maxCloudQuantity: string;
  isWindShear: boolean;
  minTemperature: number;
  minAltimeter: number;
  maxWindSpeed: number;
  maxGust: number;
  weatherPhenomenon: WeatherPhenomenon;
  maxWeatherIntensity: string;
}

interface SigmetThresholds {
  WMO: WeatherPhenomenon;
  phenomenon: WeatherPhenomenon;
  maxIntensity: string;
  minFlightLevel: number;
  maxFlightLevel: number;
}

@Component({
  selector: 'app-thresholds',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    ButtonDirective,
    FormControlDirective,
    FormLabelDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    ModalModule
  ],
  templateUrl: './thresholds.component.html',
  styleUrl: './thresholds.component.scss',
})
export class ThresholdsComponent implements OnInit, OnDestroy {
  selectedThresholdType: string = 'METAR';

  metarThresholds: MetarThresholds = {
    minVisibility: 0.8,
    minCloudHeight: 200,
    maxCloudQuantity: 'BKN',
    isWindShear: true,
    minTemperature: 4,
    minAltimeter: 950,
    maxWindSpeed: 40,
    maxGust: 45,
    weatherPhenomenon: {
      cancelling: ['THUNDERSTORM', 'FREEZING_RAIN', 'FREEZING_DRIZZLE', 'FUNNEL_CLOUD', 'SQUALL', 'HAIL'],
      operationallySignificant: ['SNOW', 'FOG', 'RAIN_SNOW', 'BLOWING_SNOW']
    },
    maxWeatherIntensity: 'HEAVY'
  };

  tafThresholds: TafThresholds = {
    minVisibility: 0.8,
    minCloudHeight: 200,
    maxCloudQuantity: 'BKN',
    cancellingTempoCloudType: 'CB',
    maxWindSpeed: 40,
    maxGust: 45,
    minTempoProbability: 40,
    weatherConditions: {
      cancelling: [
        'THUNDERSTORM',
        'FREEZING_RAIN',
        'FREEZING_DRIZZLE',
        'FUNNEL_CLOUD',
        'SQUALL',
        'HAIL'
      ],
      operationallySignificant: [
        'SNOW',
        'FOG',
        'RAIN_SNOW',
        'BLOWING_SNOW'
      ]
    }
  };

  sigmetThresholds: SigmetThresholds = {
    WMO: {
      cancelling: ['WV', 'WC'],
      operationallySignificant: ['WS']
    },
    phenomenon: {
      cancelling: ['VA', 'TC', 'RDOACT_CLD'],
      operationallySignificant: ['MTW', 'TURB', 'ICE', 'TS', 'DS', 'SS']
    },
    maxIntensity: 'INTSF',
    minFlightLevel: 30,
    maxFlightLevel: 450
  };

  phenomenaOptions: { phenomenon: string, descriptives: string[], isStandalone?: boolean }[] = [
    { phenomenon: 'DRIZZLE', descriptives: ['DRIZZLE', 'FREEZING'] },
    { phenomenon: 'RAIN', descriptives: ['RAIN', 'FREEZING', 'SHOWERS', 'THUNDERSTORM'] },
    { phenomenon: 'SNOW', descriptives: ['SNOW', 'DRIFTING', 'BLOWING', 'SHOWERS', 'THUNDERSTORM'] },
    { phenomenon: 'SNOW_GRAINS', descriptives: ['SNOW_GRAINS'] },
    { phenomenon: 'ICE_CRYSTALS', descriptives: ['ICE_CRYSTALS'] },
    { phenomenon: 'ICE_PELLETS', descriptives: ['ICE_PELLETS', 'SHOWERS', 'THUNDERSTORM'] },
    { phenomenon: 'HAIL', descriptives: ['HAIL', 'SHOWERS', 'THUNDERSTORM'] },
    { phenomenon: 'SMALL_HAIL', descriptives: ['SMALL_HAIL', 'SHOWERS', 'THUNDERSTORM'] },
    { phenomenon: 'UNKNOWN_PRECIP', descriptives: ['UNKNOWN_PRECIP', 'FREEZING'] },
    { phenomenon: 'FOG', descriptives: ['FOG', 'SHALLOW', 'PATCHES', 'PARTIAL', 'FREEZING'] },
    { phenomenon: 'DUST', descriptives: ['DUST', 'DRIFTING', 'BLOWING'] },
    { phenomenon: 'SAND', descriptives: ['SAND', 'DRIFTING', 'BLOWING'] },
    { phenomenon: 'SPRAY', descriptives: ['SPRAY', 'BLOWING'] },
    { phenomenon: 'MIST', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'SMOKE', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'VOLCANIC_ASH', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'HAZE', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'DUST_WHIRLS', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'SAND_WHIRLS', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'SQUALL', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'FUNNEL_CLOUD', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'TORNADO', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'WATERSPOUT', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'SANDSTORM', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'DUSTSTORM', descriptives: ['(none)'], isStandalone: true },
    { phenomenon: 'THUNDERSTORM', descriptives: ['(none)'], isStandalone: true }
  ];

  sigmetWmoOptions: { phenomenon: string, descriptives: string[] }[] = [
    { phenomenon: 'WV', descriptives: ['(none)'] },
    { phenomenon: 'WC', descriptives: ['(none)'] },
    { phenomenon: 'WS', descriptives: ['(none)'] }
  ];

  sigmetPhenomOptions: { phenomenon: string, descriptives: string[] }[] = [
    { phenomenon: 'VA', descriptives: ['(none)'] },
    { phenomenon: 'TC', descriptives: ['(none)'] },
    { phenomenon: 'RDOACT_CLD', descriptives: ['(none)'] },
    { phenomenon: 'MTW', descriptives: ['(none)'] },
    { phenomenon: 'TURB', descriptives: ['(none)'] },
    { phenomenon: 'ICE', descriptives: ['(none)'] },
    { phenomenon: 'TS', descriptives: ['(none)'] },
    { phenomenon: 'DS', descriptives: ['(none)'] },
    { phenomenon: 'SS', descriptives: ['(none)'] }
  ];

  showPhenomenaModal: boolean = false;
  currentPhenomenaList: string[] = [];
  selectedPhenomenon: string | null = null;
  currentPhenomenaType: 'cancelling' | 'significant' = 'cancelling';
  currentModalThresholdType: 'METAR' | 'TAF' | 'SIGMET_WMO' | 'SIGMET_PHENOM' = 'METAR';

  // Dropdown open state variables for SIGMET multi-selects
  wmoCancellingDropdownOpen = false;
  wmoSignificantDropdownOpen = false;
  phenomCancellingDropdownOpen = false;
  phenomSignificantDropdownOpen = false;
  intensityDropdownOpen = false;

  // Dropdown open state variables for single-select dropdowns
  metarCloudQuantityDropdownOpen = false;
  metarWeatherIntensityDropdownOpen = false;
  tafCloudQuantityDropdownOpen = false;
  tafTempoCloudTypeDropdownOpen = false;

  // Options arrays
  intensityOptions = ['INTSF', 'WKN', 'NC'];
  cloudQuantityOptions = ['FEW', 'SCT', 'BKN', 'OVC'];
  weatherIntensityOptions = ['HEAVY', 'LIGHT'];
  tempoCloudTypeOptions = ['CB', 'TCU'];

  toggleSigmetDropdown(dropdown: 'wmoCancelling' | 'wmoSignificant' | 'phenomCancelling' | 'phenomSignificant') {
    const shouldOpen = !this.getSigmetDropdownState(dropdown);

    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
    this.intensityDropdownOpen = false;

    if (shouldOpen) {
      this.setSigmetDropdownState(dropdown, true);
    }
  }

  toggleIntensityDropdown() {
    this.intensityDropdownOpen = !this.intensityDropdownOpen;
    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
  }

  selectIntensity(value: string) {
    this.sigmetThresholds.maxIntensity = value;
    this.intensityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleMetarCloudQuantityDropdown() {
    this.metarCloudQuantityDropdownOpen = !this.metarCloudQuantityDropdownOpen;
    this.metarWeatherIntensityDropdownOpen = false;
  }

  selectMetarCloudQuantity(value: string) {
    this.metarThresholds.maxCloudQuantity = value;
    this.metarCloudQuantityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleMetarWeatherIntensityDropdown() {
    this.metarWeatherIntensityDropdownOpen = !this.metarWeatherIntensityDropdownOpen;
    this.metarCloudQuantityDropdownOpen = false;
  }

  selectMetarWeatherIntensity(value: string) {
    this.metarThresholds.maxWeatherIntensity = value;
    this.metarWeatherIntensityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleTafCloudQuantityDropdown() {
    this.tafCloudQuantityDropdownOpen = !this.tafCloudQuantityDropdownOpen;
    this.tafTempoCloudTypeDropdownOpen = false;
  }

  selectTafCloudQuantity(value: string) {
    this.tafThresholds.maxCloudQuantity = value;
    this.tafCloudQuantityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleTafTempoCloudTypeDropdown() {
    this.tafTempoCloudTypeDropdownOpen = !this.tafTempoCloudTypeDropdownOpen;
    this.tafCloudQuantityDropdownOpen = false;
  }

  selectTafTempoCloudType(value: string) {
    this.tafThresholds.cancellingTempoCloudType = value;
    this.tafTempoCloudTypeDropdownOpen = false;
    this.saveThresholds();
  }

  private getSigmetDropdownState(dropdown: 'wmoCancelling' | 'wmoSignificant' | 'phenomCancelling' | 'phenomSignificant'): boolean {
    switch (dropdown) {
      case 'wmoCancelling':
        return this.wmoCancellingDropdownOpen;
      case 'wmoSignificant':
        return this.wmoSignificantDropdownOpen;
      case 'phenomCancelling':
        return this.phenomCancellingDropdownOpen;
      case 'phenomSignificant':
        return this.phenomSignificantDropdownOpen;
    }
  }

  private setSigmetDropdownState(
    dropdown: 'wmoCancelling' | 'wmoSignificant' | 'phenomCancelling' | 'phenomSignificant',
    isOpen: boolean
  ) {
    switch (dropdown) {
      case 'wmoCancelling':
        this.wmoCancellingDropdownOpen = isOpen;
        break;
      case 'wmoSignificant':
        this.wmoSignificantDropdownOpen = isOpen;
        break;
      case 'phenomCancelling':
        this.phenomCancellingDropdownOpen = isOpen;
        break;
      case 'phenomSignificant':
        this.phenomSignificantDropdownOpen = isOpen;
        break;
    }
  }

  openPhenomenaModal(type: 'cancelling' | 'significant', thresholdType: 'METAR' | 'TAF' | 'SIGMET_WMO' | 'SIGMET_PHENOM' = 'METAR') {
    this.currentPhenomenaType = type;
    this.currentModalThresholdType = thresholdType;

    if (thresholdType === 'METAR') {
      this.currentPhenomenaList = type === 'cancelling'
        ? [...this.metarThresholds.weatherPhenomenon.cancelling]
        : [...this.metarThresholds.weatherPhenomenon.operationallySignificant];
    } else if (thresholdType === 'TAF') {
      this.currentPhenomenaList = type === 'cancelling'
        ? [...this.tafThresholds.weatherConditions.cancelling]
        : [...this.tafThresholds.weatherConditions.operationallySignificant];
    } else if (thresholdType === 'SIGMET_WMO') {
      this.currentPhenomenaList = type === 'cancelling'
        ? [...this.sigmetThresholds.WMO.cancelling]
        : [...this.sigmetThresholds.WMO.operationallySignificant];
    } else if (thresholdType === 'SIGMET_PHENOM') {
      this.currentPhenomenaList = type === 'cancelling'
        ? [...this.sigmetThresholds.phenomenon.cancelling]
        : [...this.sigmetThresholds.phenomenon.operationallySignificant];
    }

    this.selectedPhenomenon = null;
    this.showPhenomenaModal = true;
  }

  selectPhenomenon(p: string) {
    const options = (this.currentModalThresholdType === 'METAR' || this.currentModalThresholdType === 'TAF')
      ? this.phenomenaOptions
      : (this.currentModalThresholdType === 'SIGMET_WMO' ? this.sigmetWmoOptions : this.sigmetPhenomOptions);

    const opt = options.find(o => o.phenomenon === p);
    if (opt && opt.descriptives.length === 1 && (opt.descriptives[0] === '(none)' || opt.descriptives[0] === p)) {
      this.selectedPhenomenon = p;
      this.addCombination(opt.descriptives[0]);
    } else {
      this.selectedPhenomenon = p;
    }
  }

  addCombination(descriptive: string) {
    if (!this.selectedPhenomenon) return;

    let value = '';
    if (descriptive === '(none)' || descriptive === this.selectedPhenomenon) {
      value = this.selectedPhenomenon;
    } else {
      value = `${descriptive}_${this.selectedPhenomenon}`;
    }

    if (!this.currentPhenomenaList.includes(value)) {
      this.currentPhenomenaList.push(value);
      this.updateMetarPhenomena();
    }
    this.selectedPhenomenon = null;
  }

  removePhenomenon(item: string) {
    this.currentPhenomenaList = this.currentPhenomenaList.filter(i => i !== item);
    this.updateMetarPhenomena();
  }

  updateMetarPhenomena() {
    if (this.currentModalThresholdType === 'METAR') {
      if (this.currentPhenomenaType === 'cancelling') {
        this.metarThresholds.weatherPhenomenon.cancelling = [...this.currentPhenomenaList];
      } else {
        this.metarThresholds.weatherPhenomenon.operationallySignificant = [...this.currentPhenomenaList];
      }
    } else if (this.currentModalThresholdType === 'TAF') {
      if (this.currentPhenomenaType === 'cancelling') {
        this.tafThresholds.weatherConditions.cancelling = [...this.currentPhenomenaList];
      } else {
        this.tafThresholds.weatherConditions.operationallySignificant = [...this.currentPhenomenaList];
      }
    } else if (this.currentModalThresholdType === 'SIGMET_WMO') {
      if (this.currentPhenomenaType === 'cancelling') {
        this.sigmetThresholds.WMO.cancelling = [...this.currentPhenomenaList];
      } else {
        this.sigmetThresholds.WMO.operationallySignificant = [...this.currentPhenomenaList];
      }
    } else if (this.currentModalThresholdType === 'SIGMET_PHENOM') {
      if (this.currentPhenomenaType === 'cancelling') {
        this.sigmetThresholds.phenomenon.cancelling = [...this.currentPhenomenaList];
      } else {
        this.sigmetThresholds.phenomenon.operationallySignificant = [...this.currentPhenomenaList];
      }
    }

    this.saveThresholds();
  }

  closePhenomenaModal() {
    this.showPhenomenaModal = false;
  }

  ngOnInit(): void {
    // Initial data loading logic could go here
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // If the click happened inside any .dropdown-multiselect, do nothing
    if (target.closest('.dropdown-multiselect')) return;

    // Otherwise close all dropdowns
    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
    this.intensityDropdownOpen = false;
    this.metarCloudQuantityDropdownOpen = false;
    this.metarWeatherIntensityDropdownOpen = false;
    this.tafCloudQuantityDropdownOpen = false;
    this.tafTempoCloudTypeDropdownOpen = false;
  }

  setThresholdType(type: string) {
    this.selectedThresholdType = type;
  }

  onThresholdFieldMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const field = target.closest('.form-control, .form-select, div.border.rounded.cursor-pointer') as HTMLElement | null;

    if (!field) {
      return;
    }

    const rect = field.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    field.style.setProperty('--threshold-hover-x', `${x}%`);
    field.style.setProperty('--threshold-hover-y', `${y}%`);
  }

  onKeyPress(event: KeyboardEvent, currentValue: any, allowDecimal: boolean = true, allowNegative: boolean = false) {
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);
    const valueStr = String(currentValue || '');

    // Allow digits (0-9)
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }

    // Allow minus sign only at the beginning
    if (allowNegative && char === '-') {
      const selectionStart = (event.target as HTMLInputElement).selectionStart;
      if (selectionStart === 0 && !valueStr.includes('-')) {
        return true;
      }
      event.preventDefault();
      return false;
    }

    // Allow dot, but not if it's the second dot or if it would be consecutive
    if (allowDecimal && char === '.') {
      if (valueStr.includes('.')) {
        event.preventDefault();
        return false;
      }

      const selectionStart = (event.target as HTMLInputElement).selectionStart;
      if (selectionStart !== null && selectionStart > 0 && valueStr[selectionStart - 1] === '.') {
        event.preventDefault();
        return false;
      }
      return true;
    }

    // Prevent everything else
    event.preventDefault();
    return false;
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    // If we clicked outside the component or to another element that is not a child of this component
    const target = event.relatedTarget as HTMLElement;
    if (!target || !this.isDescendant(target)) {
      this.saveThresholds();
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(event: BeforeUnloadEvent) {
    this.saveThresholds();
  }

  ngOnDestroy() {
    this.saveThresholds();
  }

  private isDescendant(target: HTMLElement): boolean {
    let parent = target.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === 'app-thresholds') {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  }

  saveThresholds() {
    console.log('Saving thresholds:', {
      metar: this.metarThresholds,
      taf: this.tafThresholds,
      sigmet: this.sigmetThresholds
    });
    // Logic to save thresholds via API would go here
  }

  // Toggle selection for WMO Cancelling
  toggleWmoCancelling(phenomenon: string) {
    const idx = this.sigmetThresholds.WMO.cancelling.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.WMO.cancelling.splice(idx, 1);
    } else {
      this.sigmetThresholds.WMO.cancelling.push(phenomenon);
    }
    this.saveThresholds();
  }

  // Toggle selection for WMO Operationally Significant
  toggleWmoSignificant(phenomenon: string) {
    const idx = this.sigmetThresholds.WMO.operationallySignificant.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.WMO.operationallySignificant.splice(idx, 1);
    } else {
      this.sigmetThresholds.WMO.operationallySignificant.push(phenomenon);
    }
    this.saveThresholds();
  }

  // Toggle selection for Phenomenon Cancelling
  togglePhenomCancelling(phenomenon: string) {
    const idx = this.sigmetThresholds.phenomenon.cancelling.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.phenomenon.cancelling.splice(idx, 1);
    } else {
      this.sigmetThresholds.phenomenon.cancelling.push(phenomenon);
    }
    this.saveThresholds();
  }

  // Toggle selection for Phenomenon Operationally Significant
  togglePhenomSignificant(phenomenon: string) {
    const idx = this.sigmetThresholds.phenomenon.operationallySignificant.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.phenomenon.operationallySignificant.splice(idx, 1);
    } else {
      this.sigmetThresholds.phenomenon.operationallySignificant.push(phenomenon);
    }
    this.saveThresholds();
  }
}
