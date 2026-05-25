import {SigmetService} from "./chunk-I74VFOSZ.js";
import {
  BadgeComponent,
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

// src/app/views/reports/sigmet/sigmet.component.ts
function SigmetComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function SigmetComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}

function SigmetComponent_tr_34_c_badge_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 12);
    \u0275\u0275text(1, "CANX");
    \u0275\u0275elementEnd();
  }
}

function SigmetComponent_tr_34_c_badge_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 13);
    \u0275\u0275text(1, "VALID");
    \u0275\u0275elementEnd();
  }
}

function SigmetComponent_tr_34_Template(rf, ctx) {
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
    \u0275\u0275template(20, SigmetComponent_tr_34_c_badge_20_Template, 2, 0, "c-badge", 10)(21, SigmetComponent_tr_34_c_badge_21_Template, 2, 0, "c-badge", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.station);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.fetchedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.validFrom ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.validTo ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((record_r2.features[0] == null ? null : record_r2.features[0].phenomenon) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((record_r2.features[0] == null ? null : record_r2.features[0].intensity) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((record_r2.features[0] == null ? null : record_r2.features[0].flightLevel) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(record_r2.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", record_r2.isCancelled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", record_r2.isValid);
  }
}

function SigmetComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2, "No SIGMET records available");
    \u0275\u0275elementEnd()();
  }
}

var SigmetComponent = class _SigmetComponent {
  constructor(sigmetService) {
    this.sigmetService = sigmetService;
    this.sigmetRecords = [];
    this.loading = false;
    this.error = null;
  }

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.loading = true;
    this.error = null;
    this.sigmetService.getAll().subscribe({
      next: (data) => {
        this.sigmetRecords = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch SIGMET records";
        this.sigmetRecords = [];
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function SigmetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SigmetComponent)(\u0275\u0275directiveInject(SigmetService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _SigmetComponent,
      selectors: [["app-sigmet"]],
      decls: 36,
      vars: 4,
      consts: [["xs", "12"], [1, "mb-4"], ["class", "text-muted mb-2", 4, "ngIf"], ["class", "text-danger mb-2", 4, "ngIf"], [2, "overflow-x", "auto"], ["cTable", "", "hover", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-muted", "mb-2"], [1, "text-danger", "mb-2"], ["color", "danger", "class", "me-1", 4, "ngIf"], ["color", "success", 4, "ngIf"], ["color", "danger", 1, "me-1"], ["color", "success"], ["colspan", "10", 1, "text-center"]],
      template: function SigmetComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header")(4, "strong");
          \u0275\u0275text(5, "SIGMET Records");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(6, "c-card-body");
          \u0275\u0275template(7, SigmetComponent_div_7_Template, 2, 0, "div", 2)(8, SigmetComponent_div_8_Template, 2, 1, "div", 3);
          \u0275\u0275elementStart(9, "div", 4)(10, "table", 5)(11, "thead")(12, "tr")(13, "th");
          \u0275\u0275text(14, "ID");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(15, "th");
          \u0275\u0275text(16, "Station");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(17, "th");
          \u0275\u0275text(18, "Fetched At");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(19, "th");
          \u0275\u0275text(20, "Valid From");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(21, "th");
          \u0275\u0275text(22, "Valid To");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(23, "th");
          \u0275\u0275text(24, "Phenomenon");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(25, "th");
          \u0275\u0275text(26, "Intensity");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(27, "th");
          \u0275\u0275text(28, "Flight Level");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(29, "th");
          \u0275\u0275text(30, "Message");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(31, "th");
          \u0275\u0275text(32, "Flags");
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(33, "tbody");
          \u0275\u0275template(34, SigmetComponent_tr_34_Template, 22, 11, "tr", 6)(35, SigmetComponent_tr_35_Template, 3, 0, "tr", 7);
          \u0275\u0275elementEnd()()()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(7);
          \u0275\u0275property("ngIf", ctx.loading);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.error);
          \u0275\u0275advance(26);
          \u0275\u0275property("ngForOf", ctx.sigmetRecords);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", !ctx.loading && ctx.sigmetRecords.length === 0);
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
        BadgeComponent
      ],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigmetComponent, [{
    type: Component,
    args: [{
      selector: "app-sigmet", imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        TableDirective,
        BadgeComponent
      ], template: `<c-row>
  <c-col xs="12">
    <c-card class="mb-4">
      <c-card-header>
        <strong>SIGMET Records</strong>
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
                <th>Fetched At</th>
                <th>Valid From</th>
                <th>Valid To</th>
                <th>Phenomenon</th>
                <th>Intensity</th>
                <th>Flight Level</th>
                <th>Message</th>
                <th>Flags</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let record of sigmetRecords">
                <td>{{ record.id }}</td>
                <td>{{ record.station }}</td>
                <td>{{ record.fetchedAt }}</td>
                <td>{{ record.validFrom ?? '\u2014' }}</td>
                <td>{{ record.validTo ?? '\u2014' }}</td>
                <td>{{ record.features[0]?.phenomenon ?? '\u2014' }}</td>
                <td>{{ record.features[0]?.intensity ?? '\u2014' }}</td>
                <td>{{ record.features[0]?.flightLevel ?? '\u2014' }}</td>
                <td>{{ record.message }}</td>
                <td>
                  <c-badge *ngIf="record.isCancelled" color="danger" class="me-1">CANX</c-badge>
                  <c-badge *ngIf="record.isValid" color="success">VALID</c-badge>
                </td>
              </tr>
              <tr *ngIf="!loading && sigmetRecords.length === 0">
                <td colspan="10" class="text-center">No SIGMET records available</td>
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
  }], () => [{type: SigmetService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigmetComponent, {
    className: "SigmetComponent",
    filePath: "src/app/views/reports/sigmet/sigmet.component.ts",
    lineNumber: 30
  });
})();
export {
  SigmetComponent
};
//# sourceMappingURL=chunk-PDI4YF2D.js.map
