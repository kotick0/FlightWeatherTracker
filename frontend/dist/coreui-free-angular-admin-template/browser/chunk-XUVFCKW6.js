import {
  AirportIcaoMultiselectComponent,
  ReportHoursInputComponent,
  REPORTS_FILTER_KEYS,
  ReportsFilterPreferencesService
} from "./chunk-HENSDM77.js";
import "./chunk-CRQQ6BLH.js";
import "./chunk-PWOYEK6O.js";
import {MetarService} from "./chunk-ETDPLXCM.js";
import {filterRecordsByStations} from "./chunk-5LU64T2P.js";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  NgForOf,
  NgIf,
  RowComponent,
  TableDirective
} from "./chunk-XWN6YHZC.js";
import {Component, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/reports/metar/metar.component.ts
var arrowFn0 = (ctx, view) => (c) => c.formatted;

function MetarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}

function MetarComponent_tr_47_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const record_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", record_r2.wind.speed, " ", record_r2.wind.unit, " ", record_r2.wind.direction, " ");
  }
}

function MetarComponent_tr_47_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}

function MetarComponent_tr_47_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const record_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", record_r2.visibility.mainVisibility, " (", record_r2.visibility.value, " ", record_r2.visibility.unit, ") ");
  }
}

function MetarComponent_tr_47_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}

function MetarComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275template(24, MetarComponent_tr_47_ng_container_24_Template, 2, 3, "ng-container", 16)(25, MetarComponent_tr_47_ng_template_25_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275template(28, MetarComponent_tr_47_ng_container_28_Template, 2, 3, "ng-container", 16)(29, MetarComponent_tr_47_ng_template_29_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r2 = ctx.$implicit;
    const noWind_r3 = \u0275\u0275reference(26);
    const noVisibility_r4 = \u0275\u0275reference(30);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.station);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.observedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.fetchedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.temperature ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.dewPoint ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.altimeter ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.isCavok ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.isCancelled ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.isCorrected ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", record_r2.wind)("ngIfElse", noWind_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", record_r2.visibility)("ngIfElse", noVisibility_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(record_r2.clouds.length > 0 ? record_r2.clouds.map(\u0275\u0275arrowFunction(17, arrowFn0, ctx)).join(", ") : "None");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.conditions.length > 0 ? record_r2.conditions.map(\u0275\u0275arrowFunction(18, arrowFn0, ctx)).join("; ") : "None");
  }
}

function MetarComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, "Select at least one airport to view METAR records");
    \u0275\u0275elementEnd()();
  }
}

function MetarComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, "No METAR records for the selected airports and time range");
    \u0275\u0275elementEnd()();
  }
}

var MetarComponent = class _MetarComponent {
  constructor(preferences, metarService) {
    this.preferences = preferences;
    this.metarService = metarService;
    this.icaoStorageKey = REPORTS_FILTER_KEYS.metar.selectedIcaos;
    this.metarRecords = [];
    this.hours = 1;
    this.selectedIcaos = [];
    this.loading = false;
    this.error = null;
  }

  onHoursChange(hours) {
    this.hours = hours;
    this.preferences.setMetarHours(hours);
    this.loadRecords();
  }

  onSelectedIcaosChange(icaos) {
    this.selectedIcaos = icaos;
    this.loadRecords();
  }

  ngOnInit() {
    this.hours = this.preferences.getMetarHours();
  }

  loadRecords() {
    this.error = null;
    if (this.selectedIcaos.length === 0) {
      this.metarRecords = [];
      this.loading = false;
      return;
    }
    this.loading = true;
    this.metarService.getFiltered(this.selectedIcaos, this.hours).subscribe({
      next: (data) => {
        this.metarRecords = filterRecordsByStations(data, this.selectedIcaos);
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch METAR records";
        this.metarRecords = [];
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function MetarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetarComponent)(\u0275\u0275directiveInject(ReportsFilterPreferencesService), \u0275\u0275directiveInject(MetarService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MetarComponent,
      selectors: [["app-metar"]],
      decls: 50,
      vars: 7,
      consts: [["noWind", ""], ["noVisibility", ""], ["xs", "12"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "me-2", 3, "selectedIcaosChange", "storageKey"], [3, "hoursChange", "hours"], ["class", "text-muted mb-2", 4, "ngIf"], ["class", "text-danger mb-2", 4, "ngIf"], [2, "overflow-x", "auto"], ["cTable", "", "hover", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-muted", "mb-2"], [1, "text-danger", "mb-2"], [4, "ngIf", "ngIfElse"], ["colspan", "15", 1, "text-center"]],
      template: function MetarComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-row")(1, "c-col", 2)(2, "c-card", 3)(3, "c-card-header", 4)(4, "strong");
          \u0275\u0275text(5, "METAR Records");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 5)(7, "app-airport-icao-multiselect", 6);
          \u0275\u0275listener("selectedIcaosChange", function MetarComponent_Template_app_airport_icao_multiselect_selectedIcaosChange_7_listener($event) {
            return ctx.onSelectedIcaosChange($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "app-report-hours-input", 7);
          \u0275\u0275listener("hoursChange", function MetarComponent_Template_app_report_hours_input_hoursChange_8_listener($event) {
            return ctx.onHoursChange($event);
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(9, "c-card-body");
          \u0275\u0275template(10, MetarComponent_div_10_Template, 2, 0, "div", 8)(11, MetarComponent_div_11_Template, 2, 1, "div", 9);
          \u0275\u0275elementStart(12, "div", 10)(13, "table", 11)(14, "thead")(15, "tr")(16, "th");
          \u0275\u0275text(17, "ID");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(18, "th");
          \u0275\u0275text(19, "Station");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(20, "th");
          \u0275\u0275text(21, "Observed At");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(22, "th");
          \u0275\u0275text(23, "Fetched At");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(24, "th");
          \u0275\u0275text(25, "Message");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(26, "th");
          \u0275\u0275text(27, "Temperature (\xB0C)");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(28, "th");
          \u0275\u0275text(29, "Dew Point (\xB0C)");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(30, "th");
          \u0275\u0275text(31, "Altimeter (hPa)");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(32, "th");
          \u0275\u0275text(33, "CAVOK");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(34, "th");
          \u0275\u0275text(35, "Cancelled");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(36, "th");
          \u0275\u0275text(37, "Corrected");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(38, "th");
          \u0275\u0275text(39, "Wind");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(40, "th");
          \u0275\u0275text(41, "Visibility");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(42, "th");
          \u0275\u0275text(43, "Clouds");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(44, "th");
          \u0275\u0275text(45, "Weather Conditions");
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(46, "tbody");
          \u0275\u0275template(47, MetarComponent_tr_47_Template, 35, 19, "tr", 12)(48, MetarComponent_tr_48_Template, 3, 0, "tr", 13)(49, MetarComponent_tr_49_Template, 3, 0, "tr", 13);
          \u0275\u0275elementEnd()()()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(7);
          \u0275\u0275property("storageKey", ctx.icaoStorageKey);
          \u0275\u0275advance();
          \u0275\u0275property("hours", ctx.hours);
          \u0275\u0275advance(2);
          \u0275\u0275property("ngIf", ctx.loading);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.error);
          \u0275\u0275advance(36);
          \u0275\u0275property("ngForOf", ctx.metarRecords);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", !ctx.loading && ctx.selectedIcaos.length === 0);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", !ctx.loading && ctx.selectedIcaos.length > 0 && ctx.metarRecords.length === 0);
        }
      },
      dependencies: [
        CommonModule,
        NgForOf,
        NgIf,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        TableDirective,
        AirportIcaoMultiselectComponent,
        ReportHoursInputComponent
      ],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetarComponent, [{
    type: Component,
    args: [{
      selector: "app-metar", imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        TableDirective,
        AirportIcaoMultiselectComponent,
        ReportHoursInputComponent
      ], template: `<c-row>
    <c-col xs="12">
      <c-card class="mb-4">
        <c-card-header class="d-flex justify-content-between align-items-center">
          <strong>METAR Records</strong>
          <div class="d-flex align-items-center">
            <app-airport-icao-multiselect
              class="me-2"
              [storageKey]="icaoStorageKey"
              (selectedIcaosChange)="onSelectedIcaosChange($event)"
            />
            <app-report-hours-input
              [hours]="hours"
              (hoursChange)="onHoursChange($event)"
            />
          </div>
        </c-card-header>
        <c-card-body>
          <div *ngIf="loading" class="text-muted mb-2">Loading...</div>
          <div *ngIf="error" class="text-danger mb-2">{{ error }}</div>
          <div style="overflow-x: auto;">
            <table cTable hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Station</th>
                  <th>Observed At</th>
                  <th>Fetched At</th>
                  <th>Message</th>
                  <th>Temperature (\xB0C)</th>
                  <th>Dew Point (\xB0C)</th>
                  <th>Altimeter (hPa)</th>
                  <th>CAVOK</th>
                  <th>Cancelled</th>
                  <th>Corrected</th>
                  <th>Wind</th>
                  <th>Visibility</th>
                  <th>Clouds</th>
                  <th>Weather Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let record of metarRecords">
                  <td>{{ record.id }}</td>
                  <td>{{ record.station }}</td>
                  <td>{{ record.observedAt }}</td>
                  <td>{{ record.fetchedAt }}</td>
                  <td>{{ record.message }}</td>
                  <td>{{ record.temperature ?? '\u2014' }}</td>
                  <td>{{ record.dewPoint ?? '\u2014' }}</td>
                  <td>{{ record.altimeter ?? '\u2014' }}</td>
                  <td>{{ record.isCavok ? 'Yes' : 'No' }}</td>
                  <td>{{ record.isCancelled ? 'Yes' : 'No' }}</td>
                  <td>{{ record.isCorrected ? 'Yes' : 'No' }}</td>
                  <td>
                    <ng-container *ngIf="record.wind; else noWind">
                      {{ record.wind.speed }} {{ record.wind.unit }} {{ record.wind.direction }}
                    </ng-container>
                    <ng-template #noWind>\u2014</ng-template>
                  </td>
                  <td>
                    <ng-container *ngIf="record.visibility; else noVisibility">
                      {{ record.visibility.mainVisibility }} ({{ record.visibility.value }} {{ record.visibility.unit }})
                    </ng-container>
                    <ng-template #noVisibility>\u2014</ng-template>
                  </td>
                  <td>{{ record.clouds.length > 0 ? record.clouds.map(c => c.formatted).join(', ') : 'None' }}</td>
                  <td>{{ record.conditions.length > 0 ? record.conditions.map(c => c.formatted).join('; ') : 'None' }}</td>
                </tr>
                <tr *ngIf="!loading && selectedIcaos.length === 0">
                  <td colspan="15" class="text-center">Select at least one airport to view METAR records</td>
                </tr>
                <tr *ngIf="!loading && selectedIcaos.length > 0 && metarRecords.length === 0">
                  <td colspan="15" class="text-center">No METAR records for the selected airports and time range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </c-card-body>
      </c-card>
    </c-col>
  </c-row>
`
    }]
  }], () => [{type: ReportsFilterPreferencesService}, {type: MetarService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetarComponent, {
    className: "MetarComponent",
    filePath: "src/app/views/reports/metar/metar.component.ts",
    lineNumber: 37
  });
})();
export {
  MetarComponent
};
//# sourceMappingURL=chunk-XUVFCKW6.js.map
