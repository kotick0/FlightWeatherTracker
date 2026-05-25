import {AirportService} from "./chunk-CRQQ6BLH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-PWOYEK6O.js";
import {normalizeHoursValue} from "./chunk-5LU64T2P.js";
import {
  CommonModule,
  FormCheckComponent,
  FormCheckInputDirective,
  FormControlDirective,
  NgForOf,
  NgIf
} from "./chunk-XWN6YHZC.js";
import {Component, HostListener, Injectable, Input, input, Output, output, setClassMetadata} from "./chunk-XOYR7VWH.js";

// src/app/core/services/reports-filter-preferences.service.ts
var REPORTS_FILTER_KEYS = {
  metar: {
    selectedIcaos: "fwt.reports.metar.selectedIcaos",
    hours: "fwt.reports.metar.hours"
  },
  taf: {
    selectedIcaos: "fwt.reports.taf.selectedIcaos",
    tafType: "fwt.reports.taf.tafType",
    longHours: "fwt.reports.taf.longHours",
    shortHours: "fwt.reports.taf.shortHours"
  }
};
var VALID_TAF_TYPES = ["Long TAF", "Short TAF"];
var LEGACY_TIME_RANGE_KEY = "fwt.reports.metar.timeRange";
var LEGACY_LONG_TIME_RANGE_KEY = "fwt.reports.taf.longTimeRange";
var LEGACY_SHORT_TIME_RANGE_KEY = "fwt.reports.taf.shortTimeRange";
var ReportsFilterPreferencesService = class _ReportsFilterPreferencesService {
  getString(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ?? fallback;
    } catch (e) {
      return fallback;
    }
  }

  setString(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
    }
  }

  getStringArray(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
    } catch (e) {
      return [];
    }
  }

  setStringArray(key, values) {
    try {
      localStorage.setItem(key, JSON.stringify(values));
    } catch (e) {
    }
  }

  getMetarHours() {
    return this.getHours(REPORTS_FILTER_KEYS.metar.hours, LEGACY_TIME_RANGE_KEY, 1);
  }

  setMetarHours(hours) {
    this.setHours(REPORTS_FILTER_KEYS.metar.hours, hours);
  }

  getTafType() {
    const value = this.getString(REPORTS_FILTER_KEYS.taf.tafType, "Long TAF");
    return VALID_TAF_TYPES.includes(value) ? value : "Long TAF";
  }

  setTafType(value) {
    this.setString(REPORTS_FILTER_KEYS.taf.tafType, value);
  }

  getTafLongHours() {
    return this.getHours(REPORTS_FILTER_KEYS.taf.longHours, LEGACY_LONG_TIME_RANGE_KEY, 1);
  }

  setTafLongHours(hours) {
    this.setHours(REPORTS_FILTER_KEYS.taf.longHours, hours);
  }

  getTafShortHours() {
    return this.getHours(REPORTS_FILTER_KEYS.taf.shortHours, LEGACY_SHORT_TIME_RANGE_KEY, 1);
  }

  setTafShortHours(hours) {
    this.setHours(REPORTS_FILTER_KEYS.taf.shortHours, hours);
  }

  getHours(key, legacyKey, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        return normalizeHoursValue(raw);
      }
      const legacy = localStorage.getItem(legacyKey);
      if (legacy !== null) {
        return this.parseLegacyTimeRange(legacy, fallback);
      }
    } catch (e) {
    }
    return fallback;
  }

  setHours(key, hours) {
    try {
      localStorage.setItem(key, String(normalizeHoursValue(hours)));
    } catch (e) {
    }
  }

  parseLegacyTimeRange(value, fallback) {
    switch (value) {
      case "Last 2 hours":
        return 2;
      case "Last 3 hours":
        return 3;
      case "Last hour":
        return 1;
      default: {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? fallback : normalizeHoursValue(parsed);
      }
    }
  }

  static {
    this.\u0275fac = function ReportsFilterPreferencesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsFilterPreferencesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ReportsFilterPreferencesService,
      factory: _ReportsFilterPreferencesService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsFilterPreferencesService, [{
    type: Injectable,
    args: [{providedIn: "root"}]
  }], null, null);
})();

// src/app/shared/components/airport-icao-multiselect/airport-icao-multiselect.component.ts
function AirportIcaoMultiselectComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function AirportIcaoMultiselectComponent_div_6_div_1_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-form-check", 10)(4, "input", 11);
    \u0275\u0275listener("change", function AirportIcaoMultiselectComponent_div_6_div_1_Template_input_change_4_listener() {
      const airport_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleIcao(airport_r2.icao));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const airport_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.icao);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isSelected(airport_r2.icao));
  }
}

function AirportIcaoMultiselectComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " No airports configured ");
    \u0275\u0275elementEnd();
  }
}

function AirportIcaoMultiselectComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, AirportIcaoMultiselectComponent_div_6_div_1_Template, 5, 3, "div", 7)(2, AirportIcaoMultiselectComponent_div_6_div_2_Template, 2, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.airports);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.airports.length === 0);
  }
}

var AirportIcaoMultiselectComponent = class _AirportIcaoMultiselectComponent {
  constructor(airportService, preferences) {
    this.airportService = airportService;
    this.preferences = preferences;
    this.storageKey = input.required(...ngDevMode ? [{debugName: "storageKey"}] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedIcaosChange = output();
    this.airports = [];
    this.selectedIcaos = [];
    this.dropdownOpen = false;
    this.selectionLabel = "Select Airports...";
  }

  ngOnInit() {
    this.loadAirports();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  isSelected(icao) {
    return this.selectedIcaos.includes(icao.toUpperCase());
  }

  toggleIcao(icao) {
    const code = icao.toUpperCase();
    const index = this.selectedIcaos.indexOf(code);
    if (index > -1) {
      this.selectedIcaos.splice(index, 1);
    } else {
      this.selectedIcaos.push(code);
    }
    this.persistSelection();
    this.selectedIcaosChange.emit([...this.selectedIcaos]);
  }

  onDocumentClick(event) {
    const target = event.target;
    if (target.closest(".dropdown-multiselect")) {
      return;
    }
    this.dropdownOpen = false;
  }

  loadAirports() {
    this.airportService.getAll().subscribe({
      next: (data) => {
        this.airports = [...data].sort((a, b) => a.icao.localeCompare(b.icao));
        this.restoreSelection();
      },
      error: (err) => {
        console.error("Failed to load airports", err);
      }
    });
  }

  restoreSelection() {
    const stored = this.preferences.getStringArray(this.storageKey());
    const validIcaos = new Set(this.airports.map((a) => a.icao));
    this.selectedIcaos = stored.map((icao) => icao.toUpperCase()).filter((icao) => validIcaos.has(icao));
    this.selectedIcaosChange.emit([...this.selectedIcaos]);
  }

  persistSelection() {
    this.preferences.setStringArray(this.storageKey(), this.selectedIcaos);
  }

  static {
    this.\u0275fac = function AirportIcaoMultiselectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AirportIcaoMultiselectComponent)(\u0275\u0275directiveInject(AirportService), \u0275\u0275directiveInject(ReportsFilterPreferencesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _AirportIcaoMultiselectComponent,
      selectors: [["app-airport-icao-multiselect"]],
      hostBindings: function AirportIcaoMultiselectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function AirportIcaoMultiselectComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, \u0275\u0275resolveDocument);
        }
      },
      inputs: {storageKey: [1, "storageKey"]},
      outputs: {selectedIcaosChange: "selectedIcaosChange"},
      decls: 7,
      vars: 3,
      consts: [[1, "dropdown-multiselect", "position-relative"], ["tabindex", "0", "role", "button", "aria-haspopup", "listbox", 1, "form-select", "bg-body", "d-flex", "align-items-center", 3, "click"], [1, "flex-grow-1", "text-truncate"], [1, "ms-2"], [1, "bi", "bi-caret-down-fill"], ["class", "dropdown-menu w-100 mt-1 show", 4, "ngIf"], [1, "dropdown-menu", "w-100", "mt-1", "show"], ["class", "dropdown-item d-flex justify-content-between align-items-center", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-empty", 4, "ngIf"], [1, "dropdown-item", "d-flex", "justify-content-between", "align-items-center", 3, "click"], [1, "mb-0", "ms-2", 3, "inline"], ["cFormCheckInput", "", "type", "checkbox", 2, "border-color", "#8a93a2", 3, "change", "checked"], [1, "dropdown-empty"]],
      template: function AirportIcaoMultiselectComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275listener("click", function AirportIcaoMultiselectComponent_Template_div_click_1_listener() {
            return ctx.toggleDropdown();
          });
          \u0275\u0275elementStart(2, "span", 2);
          \u0275\u0275text(3);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "span", 3);
          \u0275\u0275element(5, "i", 4);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(6, AirportIcaoMultiselectComponent_div_6_Template, 3, 2, "div", 5);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275attribute("aria-expanded", ctx.dropdownOpen);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate1(" ", ctx.selectionLabel, " ");
          \u0275\u0275advance(3);
          \u0275\u0275property("ngIf", ctx.dropdownOpen);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, FormCheckComponent, FormCheckInputDirective],
      styles: ["\n.dropdown-multiselect[_ngcontent-%COMP%] {\n  min-width: 11rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-height: 31px;\n  display: flex;\n  align-items: center;\n  padding-right: 2.5rem;\n  position: relative;\n  color: var(--cui-body-color);\n  border: 1px solid transparent;\n  border-radius: 0.375rem;\n  box-shadow: none;\n  font-size: 0.875rem;\n  background-image:\n    var(--cui-form-select-bg-img),\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)),\n    linear-gradient(var(--cui-border-color), var(--cui-border-color));\n  background-position:\n    right 0.75rem center,\n    0 0,\n    0 0;\n  background-size:\n    16px 12px,\n    auto,\n    auto;\n  background-repeat: no-repeat;\n  background-origin:\n    padding-box,\n    padding-box,\n    border-box;\n  background-clip:\n    padding-box,\n    padding-box,\n    border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5) !important;\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25) !important;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  box-shadow: none;\n  padding: 0.25rem 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-out;\n  max-height: 22.5rem;\n  overflow-y: auto;\n  z-index: 1020;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  min-width: 0;\n  padding-right: 2rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 0;\n  padding-left: 0.75rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center.active[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: inherit;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 2rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   c-form-check[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   c-form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .bi-caret-down-fill[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-empty[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  color: var(--cui-secondary-color);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=airport-icao-multiselect.component.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AirportIcaoMultiselectComponent, [{
    type: Component,
    args: [{
      selector: "app-airport-icao-multiselect",
      standalone: true,
      imports: [CommonModule, FormCheckComponent, FormCheckInputDirective],
      template: '<div class="dropdown-multiselect position-relative">\n  <div\n    class="form-select bg-body d-flex align-items-center"\n    (click)="toggleDropdown()"\n    tabindex="0"\n    role="button"\n    aria-haspopup="listbox"\n    [attr.aria-expanded]="dropdownOpen"\n  >\n    <span class="flex-grow-1 text-truncate">\n      {{ selectionLabel }}\n    </span>\n    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>\n  </div>\n  <div class="dropdown-menu w-100 mt-1 show" *ngIf="dropdownOpen">\n    <div\n      class="dropdown-item d-flex justify-content-between align-items-center"\n      *ngFor="let airport of airports"\n      (click)="$event.stopPropagation()"\n    >\n      <span>{{ airport.icao }}</span>\n      <c-form-check [inline]="true" class="mb-0 ms-2">\n        <input\n          cFormCheckInput\n          type="checkbox"\n          [checked]="isSelected(airport.icao)"\n          (change)="toggleIcao(airport.icao)"\n          style="border-color: #8a93a2;"\n        />\n      </c-form-check>\n    </div>\n    <div class="dropdown-empty" *ngIf="airports.length === 0">\n      No airports configured\n    </div>\n  </div>\n</div>\n',
      styles: ["/* src/app/shared/components/airport-icao-multiselect/airport-icao-multiselect.component.scss */\n.dropdown-multiselect {\n  min-width: 11rem;\n}\n.dropdown-multiselect .form-select {\n  cursor: pointer;\n  min-height: 31px;\n  display: flex;\n  align-items: center;\n  padding-right: 2.5rem;\n  position: relative;\n  color: var(--cui-body-color);\n  border: 1px solid transparent;\n  border-radius: 0.375rem;\n  box-shadow: none;\n  font-size: 0.875rem;\n  background-image:\n    var(--cui-form-select-bg-img),\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)),\n    linear-gradient(var(--cui-border-color), var(--cui-border-color));\n  background-position:\n    right 0.75rem center,\n    0 0,\n    0 0;\n  background-size:\n    16px 12px,\n    auto,\n    auto;\n  background-repeat: no-repeat;\n  background-origin:\n    padding-box,\n    padding-box,\n    border-box;\n  background-clip:\n    padding-box,\n    padding-box,\n    border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\n.dropdown-multiselect .form-select:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5) !important;\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25) !important;\n}\n.dropdown-multiselect .dropdown-menu {\n  border-radius: 0.375rem;\n  box-shadow: none;\n  padding: 0.25rem 0;\n  animation: fadeIn 0.25s ease-out;\n  max-height: 22.5rem;\n  overflow-y: auto;\n  z-index: 1020;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-multiselect .dropdown-item {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  min-width: 0;\n  padding-right: 2rem;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center {\n  position: relative;\n  padding-right: 0;\n  padding-left: 0.75rem;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center.active,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center:active {\n  background-color: transparent;\n  color: inherit;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center > span {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 2rem;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center c-form-check,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center .form-check {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center c-form-check .form-check-input,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center .form-check .form-check-input,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center .form-check-input {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n.dropdown-multiselect .bi-caret-down-fill {\n  display: none;\n}\n.dropdown-multiselect .dropdown-empty {\n  padding: 0.5rem 0.75rem;\n  color: var(--cui-secondary-color);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=airport-icao-multiselect.component.css.map */\n"]
    }]
  }], () => [{type: AirportService}, {type: ReportsFilterPreferencesService}], {
    storageKey: [{type: Input, args: [{isSignal: true, alias: "storageKey", required: true}]}],
    selectedIcaosChange: [{type: Output, args: ["selectedIcaosChange"]}],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirportIcaoMultiselectComponent, {
    className: "AirportIcaoMultiselectComponent",
    filePath: "src/app/shared/components/airport-icao-multiselect/airport-icao-multiselect.component.ts",
    lineNumber: 15
  });
})();

// src/app/shared/components/report-hours-input/report-hours-input.component.ts
var ReportHoursInputComponent = class _ReportHoursInputComponent {
  constructor() {
    this.hours = input(1, ...ngDevMode ? [{debugName: "hours"}] : (
      /* istanbul ignore next */
      []
    ));
    this.hoursChange = output();
  }

  onHoursChange(value) {
    this.hoursChange.emit(normalizeHoursValue(value));
  }

  onKeyPress(event) {
    const char = event.key;
    if (char.length === 1 && !/\d/.test(char)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  static {
    this.\u0275fac = function ReportHoursInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportHoursInputComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ReportHoursInputComponent,
      selectors: [["app-report-hours-input"]],
      inputs: {hours: [1, "hours"]},
      outputs: {hoursChange: "hoursChange"},
      decls: 6,
      vars: 1,
      consts: [[1, "report-hours-input", "d-flex", "align-items-center"], [1, "me-1", "text-nowrap", "small", "text-body-secondary"], ["cFormControl", "", "type", "number", "min", "1", "step", "1", "inputmode", "numeric", "aria-label", "Hours to look back", 1, "form-control", "form-control-sm", "bg-body", 3, "ngModelChange", "keypress", "ngModel"], [1, "ms-1", "text-nowrap", "small", "text-body-secondary"]],
      template: function ReportHoursInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
          \u0275\u0275text(2, "Past");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "input", 2);
          \u0275\u0275listener("ngModelChange", function ReportHoursInputComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.onHoursChange($event);
          })("keypress", function ReportHoursInputComponent_Template_input_keypress_3_listener($event) {
            return ctx.onKeyPress($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "span", 3);
          \u0275\u0275text(5, "hours");
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275property("ngModel", ctx.hours());
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, FormControlDirective],
      styles: ["\n.report-hours-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 4.5rem;\n}\n/*# sourceMappingURL=report-hours-input.component.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportHoursInputComponent, [{
    type: Component,
    args: [{
      selector: "app-report-hours-input",
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
        aria-label="Hours to look back"
      />
      <span class="ms-1 text-nowrap small text-body-secondary">hours</span>
    </div>
  `,
      styles: ["/* angular:styles/component:scss;57749a37225aa1fe7eaef60bcee7fed6c17b0438d21403701776cb9152f49b1c;/Users/kotecku/IdeaProjects/FlightWeatherTracker/frontend/src/app/shared/components/report-hours-input/report-hours-input.component.ts */\n.report-hours-input input {\n  width: 4.5rem;\n}\n/*# sourceMappingURL=report-hours-input.component.css.map */\n"]
    }]
  }], null, {
    hours: [{type: Input, args: [{isSignal: true, alias: "hours", required: false}]}],
    hoursChange: [{type: Output, args: ["hoursChange"]}]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportHoursInputComponent, {
    className: "ReportHoursInputComponent",
    filePath: "src/app/shared/components/report-hours-input/report-hours-input.component.ts",
    lineNumber: 34
  });
})();

export {
  REPORTS_FILTER_KEYS,
  ReportsFilterPreferencesService,
  AirportIcaoMultiselectComponent,
  ReportHoursInputComponent
};
//# sourceMappingURL=chunk-HENSDM77.js.map
