import {MetarService} from "./chunk-ETDPLXCM.js";
import "./chunk-5LU64T2P.js";
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

// src/app/views/metar/metar.component.ts
var arrowFn0 = (ctx, view) => (c) => c.formatted;

function MetarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_div_6_Template(rf, ctx) {
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

function MetarComponent_table_7_tr_20_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", m_r2.wind.direction, " ", m_r2.wind.directionDegrees, "\xB0 / ", m_r2.wind.speed, " kt ");
  }
}

function MetarComponent_table_7_tr_20_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_table_7_tr_20_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", m_r2.visibility.value, " ", m_r2.visibility.unit);
  }
}

function MetarComponent_table_7_tr_20_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_table_7_tr_20_c_badge_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 11);
    \u0275\u0275text(1, "CAVOK");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_table_7_tr_20_c_badge_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 12);
    \u0275\u0275text(1, "CANX");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_table_7_tr_20_c_badge_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 13);
    \u0275\u0275text(1, "COR");
    \u0275\u0275elementEnd();
  }
}

function MetarComponent_table_7_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MetarComponent_table_7_tr_20_td_5_Template, 2, 3, "td", 7)(6, MetarComponent_table_7_tr_20_td_6_Template, 2, 0, "td", 7)(7, MetarComponent_table_7_tr_20_td_7_Template, 2, 2, "td", 7)(8, MetarComponent_table_7_tr_20_td_8_Template, 2, 0, "td", 7);
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
    \u0275\u0275template(16, MetarComponent_table_7_tr_20_c_badge_16_Template, 2, 0, "c-badge", 8)(17, MetarComponent_table_7_tr_20_c_badge_17_Template, 2, 0, "c-badge", 9)(18, MetarComponent_table_7_tr_20_c_badge_18_Template, 2, 0, "c-badge", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.station);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.observedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.wind);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !m_r2.wind);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.visibility);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !m_r2.visibility);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r2.temperature, "\xB0 / ", m_r2.dewPoint, "\xB0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.clouds.length ? m_r2.clouds.map(\u0275\u0275arrowFunction(13, arrowFn0, ctx)).join(", ") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.conditions.length ? m_r2.conditions.map(\u0275\u0275arrowFunction(14, arrowFn0, ctx)).join(", ") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", m_r2.isCavok);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.isCancelled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.isCorrected);
  }
}

function MetarComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 5)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Station");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Observed At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Wind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Temp / Dew");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Clouds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Flags");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, MetarComponent_table_7_tr_20_Template, 19, 15, "tr", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.metars);
  }
}

var MetarComponent = class _MetarComponent {
  constructor(metarService) {
    this.metarService = metarService;
    this.metars = [];
    this.loading = true;
    this.error = null;
  }

  ngOnInit() {
    this.metarService.getAll().subscribe({
      next: (data) => {
        this.metars = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch METAR data";
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function MetarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetarComponent)(\u0275\u0275directiveInject(MetarService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MetarComponent,
      selectors: [["app-metar"]],
      decls: 8,
      vars: 3,
      consts: [["class", "text-muted", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["cTable", "", "hover", "", "responsive", "", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], ["cTable", "", "hover", "", "responsive", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["color", "success", 4, "ngIf"], ["color", "danger", 4, "ngIf"], ["color", "warning", 4, "ngIf"], ["color", "success"], ["color", "danger"], ["color", "warning"]],
      template: function MetarComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-card")(1, "c-card-header")(2, "strong");
          \u0275\u0275text(3, "METAR Records");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "c-card-body");
          \u0275\u0275template(5, MetarComponent_div_5_Template, 2, 0, "div", 0)(6, MetarComponent_div_6_Template, 2, 1, "div", 1)(7, MetarComponent_table_7_Template, 21, 1, "table", 2);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetarComponent, [{
    type: Component,
    args: [{
      selector: "app-metar", standalone: true, imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        TableDirective,
        BadgeComponent
      ], template: `<c-card>
  <c-card-header><strong>METAR Records</strong></c-card-header>
  <c-card-body>

    <div *ngIf="loading" class="text-muted">Loading...</div>
    <div *ngIf="error" class="text-danger">{{ error }}</div>

    <table *ngIf="!loading && !error" cTable hover responsive>
      <thead>
      <tr>
        <th>Station</th>
        <th>Observed At</th>
        <th>Wind</th>
        <th>Visibility</th>
        <th>Temp / Dew</th>
        <th>Clouds</th>
        <th>Conditions</th>
        <th>Flags</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let m of metars">
        <td>{{ m.station }}</td>
        <td>{{ m.observedAt }}</td>
        <td *ngIf="m.wind">
          {{ m.wind.direction }} {{ m.wind.directionDegrees }}\xB0 / {{ m.wind.speed }} kt
        </td>
        <td *ngIf="!m.wind">\u2014</td>
        <td *ngIf="m.visibility">{{ m.visibility.value }} {{ m.visibility.unit }}</td>
        <td *ngIf="!m.visibility">\u2014</td>
        <td>{{ m.temperature }}\xB0 / {{ m.dewPoint }}\xB0</td>
        <td>{{ m.clouds.length ? m.clouds.map(c => c.formatted).join(', ') : '\u2014' }}</td>
        <td>{{ m.conditions.length ? m.conditions.map(c => c.formatted).join(', ') : '\u2014' }}</td>
        <td>
          <c-badge *ngIf="m.isCavok" color="success">CAVOK</c-badge>
          <c-badge *ngIf="m.isCancelled" color="danger">CANX</c-badge>
          <c-badge *ngIf="m.isCorrected" color="warning">COR</c-badge>
        </td>
      </tr>
      </tbody>
    </table>

  </c-card-body>
</c-card>
`
    }]
  }], () => [{type: MetarService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetarComponent, {
    className: "MetarComponent",
    filePath: "src/app/views/metar/metar.component.ts",
    lineNumber: 17
  });
})();
export {
  MetarComponent
};
//# sourceMappingURL=chunk-B4HWG7YO.js.map
