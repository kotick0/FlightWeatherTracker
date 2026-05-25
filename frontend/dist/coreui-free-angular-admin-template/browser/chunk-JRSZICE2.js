import {
  AirportIcaoMultiselectComponent,
  ReportHoursInputComponent,
  REPORTS_FILTER_KEYS,
  ReportsFilterPreferencesService
} from "./chunk-HENSDM77.js";
import "./chunk-CRQQ6BLH.js";
import "./chunk-PWOYEK6O.js";
import {LongTafService} from "./chunk-CW4543ZR.js";
import {ShortTafService} from "./chunk-IR5YPVNT.js";
import {filterRecordsByStations} from "./chunk-5LU64T2P.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  NgForOf,
  NgIf,
  RowComponent,
  TableDirective
} from "./chunk-XWN6YHZC.js";
import {Component, forkJoin, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/reports/taf/taf.component.ts
var arrowFn0 = (ctx, view) => (c) => c.formatted;

function TafComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function TafComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}

function TafComponent_table_23_tr_30_ng_container_20_Template(rf, ctx) {
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

function TafComponent_table_23_tr_30_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}

function TafComponent_table_23_tr_30_ng_container_24_Template(rf, ctx) {
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

function TafComponent_table_23_tr_30_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}

function TafComponent_table_23_tr_30_Template(rf, ctx) {
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
    \u0275\u0275template(20, TafComponent_table_23_tr_30_ng_container_20_Template, 2, 3, "ng-container", 23)(21, TafComponent_table_23_tr_30_ng_template_21_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275template(24, TafComponent_table_23_tr_30_ng_container_24_Template, 2, 3, "ng-container", 23)(25, TafComponent_table_23_tr_30_ng_template_25_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r2 = ctx.$implicit;
    const noWind_r3 = \u0275\u0275reference(22);
    const noVisibility_r4 = \u0275\u0275reference(26);
    const ctx_r0 = \u0275\u0275nextContext(2);
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
    \u0275\u0275textInterpolate(ctx_r0.formatValidity(record_r2.validity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.isCAVOK ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.isCancelled ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.isCorrected ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", record_r2.wind)("ngIfElse", noWind_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", record_r2.visibility)("ngIfElse", noVisibility_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(record_r2.clouds.length > 0 ? record_r2.clouds.map(\u0275\u0275arrowFunction(15, arrowFn0, ctx)).join(", ") : "None");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.conditions.length > 0 ? record_r2.conditions.map(\u0275\u0275arrowFunction(16, arrowFn0, ctx)).join("; ") : "None");
  }
}

function TafComponent_table_23_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "Select at least one airport to view TAF records");
    \u0275\u0275elementEnd()();
  }
}

function TafComponent_table_23_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "No long TAF records for the selected airports and time range");
    \u0275\u0275elementEnd()();
  }
}

function TafComponent_table_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Station");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Observed At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Fetched At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Validity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "CAVOK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Corrected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Wind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Clouds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Weather Conditions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, TafComponent_table_23_tr_30_Template, 31, 17, "tr", 21)(31, TafComponent_table_23_tr_31_Template, 3, 0, "tr", 22)(32, TafComponent_table_23_tr_32_Template, 3, 0, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r0.longTafRecords);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.selectedIcaos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.selectedIcaos.length > 0 && ctx_r0.longTafRecords.length === 0);
  }
}

function TafComponent_table_24_tr_30_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const record_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", record_r5.wind.speed, " ", record_r5.wind.unit, " ", record_r5.wind.direction, " ");
  }
}

function TafComponent_table_24_tr_30_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}

function TafComponent_table_24_tr_30_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const record_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", record_r5.visibility.mainVisibility, " (", record_r5.visibility.value, " ", record_r5.visibility.unit, ") ");
  }
}

function TafComponent_table_24_tr_30_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2014");
  }
}

function TafComponent_table_24_tr_30_Template(rf, ctx) {
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
    \u0275\u0275template(20, TafComponent_table_24_tr_30_ng_container_20_Template, 2, 3, "ng-container", 23)(21, TafComponent_table_24_tr_30_ng_template_21_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275template(24, TafComponent_table_24_tr_30_ng_container_24_Template, 2, 3, "ng-container", 23)(25, TafComponent_table_24_tr_30_ng_template_25_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r5 = ctx.$implicit;
    const noShortWind_r6 = \u0275\u0275reference(22);
    const noShortVisibility_r7 = \u0275\u0275reference(26);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.station);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.observedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.fetchedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatValidity(record_r5.validity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.isCAVOK ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.isCancelled ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.isCorrected ? "Yes" : "No");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", record_r5.wind)("ngIfElse", noShortWind_r6);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", record_r5.visibility)("ngIfElse", noShortVisibility_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(record_r5.clouds.length > 0 ? record_r5.clouds.map(\u0275\u0275arrowFunction(15, arrowFn0, ctx)).join(", ") : "None");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r5.conditions.length > 0 ? record_r5.conditions.map(\u0275\u0275arrowFunction(16, arrowFn0, ctx)).join("; ") : "None");
  }
}

function TafComponent_table_24_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "Select at least one airport to view TAF records");
    \u0275\u0275elementEnd()();
  }
}

function TafComponent_table_24_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "No short TAF records for the selected airports and time range");
    \u0275\u0275elementEnd()();
  }
}

function TafComponent_table_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Station");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Observed At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Fetched At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Validity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "CAVOK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Corrected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Wind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Clouds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Weather Conditions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, TafComponent_table_24_tr_30_Template, 31, 17, "tr", 21)(31, TafComponent_table_24_tr_31_Template, 3, 0, "tr", 22)(32, TafComponent_table_24_tr_32_Template, 3, 0, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r0.shortTafRecords);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.selectedIcaos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.selectedIcaos.length > 0 && ctx_r0.shortTafRecords.length === 0);
  }
}

var TafComponent = class _TafComponent {
  constructor(preferences, longTafService, shortTafService) {
    this.preferences = preferences;
    this.longTafService = longTafService;
    this.shortTafService = shortTafService;
    this.icaoStorageKey = REPORTS_FILTER_KEYS.taf.selectedIcaos;
    this.longTafRecords = [];
    this.shortTafRecords = [];
    this.selectedTafType = "Long TAF";
    this.longHours = 1;
    this.shortHours = 1;
    this.selectedIcaos = [];
    this.loading = false;
    this.error = null;
  }

  get activeHours() {
    return this.selectedTafType === "Long TAF" ? this.longHours : this.shortHours;
  }

  setTafType(type) {
    this.selectedTafType = type;
    this.preferences.setTafType(type);
  }

  onActiveHoursChange(hours) {
    if (this.selectedTafType === "Long TAF") {
      this.longHours = hours;
      this.preferences.setTafLongHours(hours);
    } else {
      this.shortHours = hours;
      this.preferences.setTafShortHours(hours);
    }
    this.loadRecords();
  }

  onSelectedIcaosChange(icaos) {
    this.selectedIcaos = icaos;
    this.loadRecords();
  }

  ngOnInit() {
    this.selectedTafType = this.preferences.getTafType();
    this.longHours = this.preferences.getTafLongHours();
    this.shortHours = this.preferences.getTafShortHours();
  }

  formatValidity(validity) {
    if (!validity) {
      return "\u2014";
    }
    return `${validity.startDay}/${validity.startHour} \u2013 ${validity.endDay}/${validity.endHour}`;
  }

  loadRecords() {
    this.error = null;
    if (this.selectedIcaos.length === 0) {
      this.longTafRecords = [];
      this.shortTafRecords = [];
      this.loading = false;
      return;
    }
    this.loading = true;
    forkJoin({
      long: this.longTafService.getFiltered(this.selectedIcaos, this.longHours),
      short: this.shortTafService.getFiltered(this.selectedIcaos, this.shortHours)
    }).subscribe({
      next: ({long, short}) => {
        this.longTafRecords = filterRecordsByStations(long, this.selectedIcaos);
        this.shortTafRecords = filterRecordsByStations(short, this.selectedIcaos);
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch TAF records";
        this.longTafRecords = [];
        this.shortTafRecords = [];
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function TafComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TafComponent)(\u0275\u0275directiveInject(ReportsFilterPreferencesService), \u0275\u0275directiveInject(LongTafService), \u0275\u0275directiveInject(ShortTafService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _TafComponent,
      selectors: [["app-taf"]],
      decls: 25,
      vars: 8,
      consts: [["noWind", ""], ["noVisibility", ""], ["noShortWind", ""], ["noShortVisibility", ""], ["xs", "12"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "me-2", 3, "selectedIcaosChange", "storageKey"], ["alignment", "end", 1, "me-2"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "size", "sm", "variant", "outline"], ["cDropdownMenu", "", 2, "min-width", "0"], ["cDropdownItem", "", 1, "px-2", 3, "click"], [3, "hoursChange", "hours"], ["class", "text-muted mb-2", 4, "ngIf"], ["class", "text-danger mb-2", 4, "ngIf"], [2, "overflow-x", "auto"], ["cTable", "", "hover", "", 4, "ngIf"], [1, "text-muted", "mb-2"], [1, "text-danger", "mb-2"], ["cTable", "", "hover", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["colspan", "13", 1, "text-center"]],
      template: function TafComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-row")(1, "c-col", 4)(2, "c-card", 5)(3, "c-card-header", 6)(4, "strong");
          \u0275\u0275text(5);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 7)(7, "app-airport-icao-multiselect", 8);
          \u0275\u0275listener("selectedIcaosChange", function TafComponent_Template_app_airport_icao_multiselect_selectedIcaosChange_7_listener($event) {
            return ctx.onSelectedIcaosChange($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(8, "c-dropdown", 9)(9, "button", 10);
          \u0275\u0275text(10);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(11, "ul", 11)(12, "li")(13, "button", 12);
          \u0275\u0275listener("click", function TafComponent_Template_button_click_13_listener() {
            return ctx.setTafType("Long TAF");
          });
          \u0275\u0275text(14, "Long TAF");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(15, "li")(16, "button", 12);
          \u0275\u0275listener("click", function TafComponent_Template_button_click_16_listener() {
            return ctx.setTafType("Short TAF");
          });
          \u0275\u0275text(17, "Short TAF");
          \u0275\u0275elementEnd()()()();
          \u0275\u0275elementStart(18, "app-report-hours-input", 13);
          \u0275\u0275listener("hoursChange", function TafComponent_Template_app_report_hours_input_hoursChange_18_listener($event) {
            return ctx.onActiveHoursChange($event);
          });
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(19, "c-card-body");
          \u0275\u0275template(20, TafComponent_div_20_Template, 2, 0, "div", 14)(21, TafComponent_div_21_Template, 2, 1, "div", 15);
          \u0275\u0275elementStart(22, "div", 16);
          \u0275\u0275template(23, TafComponent_table_23_Template, 33, 3, "table", 17)(24, TafComponent_table_24_Template, 33, 3, "table", 17);
          \u0275\u0275elementEnd()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(5);
          \u0275\u0275textInterpolate1("", ctx.selectedTafType, " Records");
          \u0275\u0275advance(2);
          \u0275\u0275property("storageKey", ctx.icaoStorageKey);
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1(" ", ctx.selectedTafType, " ");
          \u0275\u0275advance(8);
          \u0275\u0275property("hours", ctx.activeHours);
          \u0275\u0275advance(2);
          \u0275\u0275property("ngIf", ctx.loading);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.error);
          \u0275\u0275advance(2);
          \u0275\u0275property("ngIf", ctx.selectedTafType === "Long TAF");
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.selectedTafType === "Short TAF");
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
        DropdownComponent,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
        ButtonDirective,
        AirportIcaoMultiselectComponent,
        ReportHoursInputComponent
      ],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TafComponent, [{
    type: Component,
    args: [{
      selector: "app-taf", imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        TableDirective,
        DropdownComponent,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
        ButtonDirective,
        AirportIcaoMultiselectComponent,
        ReportHoursInputComponent
      ], template: `<c-row>
  <c-col xs="12">
    <c-card class="mb-4">
      <c-card-header class="d-flex justify-content-between align-items-center">
        <strong>{{ selectedTafType }} Records</strong>
        <div class="d-flex align-items-center">
          <app-airport-icao-multiselect
            class="me-2"
            [storageKey]="icaoStorageKey"
            (selectedIcaosChange)="onSelectedIcaosChange($event)"
          />

          <c-dropdown alignment="end" class="me-2">
            <button cButton cDropdownToggle color="secondary" size="sm" variant="outline">
              {{ selectedTafType }}
            </button>
            <ul cDropdownMenu style="min-width: 0;">
              <li><button cDropdownItem (click)="setTafType('Long TAF')" class="px-2">Long TAF</button></li>
              <li><button cDropdownItem (click)="setTafType('Short TAF')" class="px-2">Short TAF</button></li>
            </ul>
          </c-dropdown>

          <app-report-hours-input
            [hours]="activeHours"
            (hoursChange)="onActiveHoursChange($event)"
          />
        </div>
      </c-card-header>
      <c-card-body>
        <div *ngIf="loading" class="text-muted mb-2">Loading...</div>
        <div *ngIf="error" class="text-danger mb-2">{{ error }}</div>
        <div style="overflow-x: auto;">
          <table cTable hover *ngIf="selectedTafType === 'Long TAF'">
            <thead>
              <tr>
                <th>ID</th>
                <th>Station</th>
                <th>Observed At</th>
                <th>Fetched At</th>
                <th>Message</th>
                <th>Validity</th>
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
              <tr *ngFor="let record of longTafRecords">
                <td>{{ record.id }}</td>
                <td>{{ record.station }}</td>
                <td>{{ record.observedAt }}</td>
                <td>{{ record.fetchedAt }}</td>
                <td>{{ record.message }}</td>
                <td>{{ formatValidity(record.validity) }}</td>
                <td>{{ record.isCAVOK ? 'Yes' : 'No' }}</td>
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
                <td colspan="13" class="text-center">Select at least one airport to view TAF records</td>
              </tr>
              <tr *ngIf="!loading && selectedIcaos.length > 0 && longTafRecords.length === 0">
                <td colspan="13" class="text-center">No long TAF records for the selected airports and time range</td>
              </tr>
            </tbody>
          </table>

          <table cTable hover *ngIf="selectedTafType === 'Short TAF'">
            <thead>
              <tr>
                <th>ID</th>
                <th>Station</th>
                <th>Observed At</th>
                <th>Fetched At</th>
                <th>Message</th>
                <th>Validity</th>
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
              <tr *ngFor="let record of shortTafRecords">
                <td>{{ record.id }}</td>
                <td>{{ record.station }}</td>
                <td>{{ record.observedAt }}</td>
                <td>{{ record.fetchedAt }}</td>
                <td>{{ record.message }}</td>
                <td>{{ formatValidity(record.validity) }}</td>
                <td>{{ record.isCAVOK ? 'Yes' : 'No' }}</td>
                <td>{{ record.isCancelled ? 'Yes' : 'No' }}</td>
                <td>{{ record.isCorrected ? 'Yes' : 'No' }}</td>
                <td>
                  <ng-container *ngIf="record.wind; else noShortWind">
                    {{ record.wind.speed }} {{ record.wind.unit }} {{ record.wind.direction }}
                  </ng-container>
                  <ng-template #noShortWind>\u2014</ng-template>
                </td>
                <td>
                  <ng-container *ngIf="record.visibility; else noShortVisibility">
                    {{ record.visibility.mainVisibility }} ({{ record.visibility.value }} {{ record.visibility.unit }})
                  </ng-container>
                  <ng-template #noShortVisibility>\u2014</ng-template>
                </td>
                <td>{{ record.clouds.length > 0 ? record.clouds.map(c => c.formatted).join(', ') : 'None' }}</td>
                <td>{{ record.conditions.length > 0 ? record.conditions.map(c => c.formatted).join('; ') : 'None' }}</td>
              </tr>
              <tr *ngIf="!loading && selectedIcaos.length === 0">
                <td colspan="13" class="text-center">Select at least one airport to view TAF records</td>
              </tr>
              <tr *ngIf="!loading && selectedIcaos.length > 0 && shortTafRecords.length === 0">
                <td colspan="13" class="text-center">No short TAF records for the selected airports and time range</td>
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
  }], () => [{type: ReportsFilterPreferencesService}, {type: LongTafService}, {type: ShortTafService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TafComponent, {
    className: "TafComponent",
    filePath: "src/app/views/reports/taf/taf.component.ts",
    lineNumber: 49
  });
})();
export {
  TafComponent
};
//# sourceMappingURL=chunk-JRSZICE2.js.map
