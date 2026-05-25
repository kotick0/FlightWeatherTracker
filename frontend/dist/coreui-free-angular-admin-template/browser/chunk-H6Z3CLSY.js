import {SigmetService} from "./chunk-I74VFOSZ.js";
import {
  BadgeComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CommonModule,
  NgForOf,
  NgIf,
  TableDirective
} from "./chunk-XWN6YHZC.js";
import {Component, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/sigmet/sigmet.component.ts
function SigmetComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function SigmetComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}

function SigmetComponent_table_7_tr_18_c_badge_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 9);
    \u0275\u0275text(1, "CANX");
    \u0275\u0275elementEnd();
  }
}

function SigmetComponent_table_7_tr_18_c_badge_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 10);
    \u0275\u0275text(1, "VALID");
    \u0275\u0275elementEnd();
  }
}

function SigmetComponent_table_7_tr_18_Template(rf, ctx) {
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
    \u0275\u0275template(14, SigmetComponent_table_7_tr_18_c_badge_14_Template, 2, 0, "c-badge", 7)(15, SigmetComponent_table_7_tr_18_c_badge_15_Template, 2, 0, "c-badge", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.station);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.validFrom ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.validTo ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((s_r2.features[0] == null ? null : s_r2.features[0].phenomenon) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((s_r2.features[0] == null ? null : s_r2.features[0].intensity) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((s_r2.features[0] == null ? null : s_r2.features[0].flightLevel) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r2.isCancelled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r2.isValid);
  }
}

function SigmetComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 5)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Station");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Valid From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Valid To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Phenomenon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Intensity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Flight Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Flags");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, SigmetComponent_table_7_tr_18_Template, 16, 8, "tr", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.sigmets);
  }
}

var SigmetComponent = class _SigmetComponent {
  constructor(sigmetService) {
    this.sigmetService = sigmetService;
    this.sigmets = [];
    this.loading = true;
    this.error = null;
  }

  ngOnInit() {
    this.sigmetService.getAll().subscribe({
      next: (data) => {
        this.sigmets = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch SIGMET data";
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
      decls: 8,
      vars: 3,
      consts: [["class", "text-muted", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["cTable", "", "hover", "", "responsive", "", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], ["cTable", "", "hover", "", "responsive", ""], [4, "ngFor", "ngForOf"], ["color", "danger", 4, "ngIf"], ["color", "success", 4, "ngIf"], ["color", "danger"], ["color", "success"]],
      template: function SigmetComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-card")(1, "c-card-header")(2, "strong");
          \u0275\u0275text(3, "SIGMET Records");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "c-card-body");
          \u0275\u0275template(5, SigmetComponent_div_5_Template, 2, 0, "div", 0)(6, SigmetComponent_div_6_Template, 2, 1, "div", 1)(7, SigmetComponent_table_7_Template, 19, 1, "table", 2);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(5);
          \u0275\u0275property("ngIf", ctx.loading);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.error);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
        }
      },
      dependencies: [
        CommonModule,
        NgForOf,
        NgIf,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
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
      selector: "app-sigmet", standalone: true, imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        TableDirective,
        BadgeComponent
      ], template: `<c-card>
  <c-card-header><strong>SIGMET Records</strong></c-card-header>
  <c-card-body>

    <div *ngIf="loading" class="text-muted">Loading...</div>
    <div *ngIf="error" class="text-danger">{{ error }}</div>

    <table *ngIf="!loading && !error" cTable hover responsive>
      <thead>
      <tr>
        <th>Station</th>
        <th>Valid From</th>
        <th>Valid To</th>
        <th>Phenomenon</th>
        <th>Intensity</th>
        <th>Flight Level</th>
        <th>Flags</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let s of sigmets">
        <td>{{ s.station }}</td>
        <td>{{ s.validFrom ?? '\u2014' }}</td>
        <td>{{ s.validTo ?? '\u2014' }}</td>
        <td>{{ s.features[0]?.phenomenon ?? '\u2014' }}</td>
        <td>{{ s.features[0]?.intensity ?? '\u2014' }}</td>
        <td>{{ s.features[0]?.flightLevel ?? '\u2014' }}</td>
        <td>
          <c-badge *ngIf="s.isCancelled" color="danger">CANX</c-badge>
          <c-badge *ngIf="s.isValid" color="success">VALID</c-badge>
        </td>
      </tr>
      </tbody>
    </table>

  </c-card-body>
</c-card>
`
    }]
  }], () => [{type: SigmetService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigmetComponent, {
    className: "SigmetComponent",
    filePath: "src/app/views/sigmet/sigmet.component.ts",
    lineNumber: 17
  });
})();
export {
  SigmetComponent
};
//# sourceMappingURL=chunk-H6Z3CLSY.js.map
