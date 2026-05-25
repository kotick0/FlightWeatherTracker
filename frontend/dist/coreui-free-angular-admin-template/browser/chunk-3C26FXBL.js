import {LongTafService} from "./chunk-CW4543ZR.js";
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

// src/app/views/taf/long-taf.component.ts
var arrowFn0 = (ctx, view) => (c) => c.formatted;

function LongTafComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_div_6_Template(rf, ctx) {
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

function LongTafComponent_table_7_tr_20_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", t_r2.validity.startDay, "/", t_r2.validity.startHour, "Z \u2013 ", t_r2.validity.endDay, "/", t_r2.validity.endHour, "Z ");
  }
}

function LongTafComponent_table_7_tr_20_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_table_7_tr_20_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", t_r2.wind.direction, " ", t_r2.wind.directionDegrees, "\xB0 / ", t_r2.wind.speed, " kt ");
  }
}

function LongTafComponent_table_7_tr_20_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_table_7_tr_20_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r2.visibility.value, " ", t_r2.visibility.unit);
  }
}

function LongTafComponent_table_7_tr_20_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_table_7_tr_20_c_badge_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 11);
    \u0275\u0275text(1, "CAVOK");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_table_7_tr_20_c_badge_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 12);
    \u0275\u0275text(1, "CANX");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_table_7_tr_20_c_badge_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c-badge", 13);
    \u0275\u0275text(1, "COR");
    \u0275\u0275elementEnd();
  }
}

function LongTafComponent_table_7_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LongTafComponent_table_7_tr_20_td_5_Template, 2, 4, "td", 7)(6, LongTafComponent_table_7_tr_20_td_6_Template, 2, 0, "td", 7)(7, LongTafComponent_table_7_tr_20_td_7_Template, 2, 3, "td", 7)(8, LongTafComponent_table_7_tr_20_td_8_Template, 2, 0, "td", 7)(9, LongTafComponent_table_7_tr_20_td_9_Template, 2, 2, "td", 7)(10, LongTafComponent_table_7_tr_20_td_10_Template, 2, 0, "td", 7);
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, LongTafComponent_table_7_tr_20_c_badge_16_Template, 2, 0, "c-badge", 8)(17, LongTafComponent_table_7_tr_20_c_badge_17_Template, 2, 0, "c-badge", 9)(18, LongTafComponent_table_7_tr_20_c_badge_18_Template, 2, 0, "c-badge", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.station);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.observedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.validity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r2.validity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.wind);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r2.wind);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.visibility);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r2.visibility);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.clouds.length ? t_r2.clouds.map(\u0275\u0275arrowFunction(13, arrowFn0, ctx)).join(", ") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.conditions.length ? t_r2.conditions.map(\u0275\u0275arrowFunction(14, arrowFn0, ctx)).join(", ") : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r2.isCAVOK);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.isCancelled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r2.isCorrected);
  }
}

function LongTafComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 5)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Station");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Observed At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Validity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Wind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Visibility");
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
    \u0275\u0275template(20, LongTafComponent_table_7_tr_20_Template, 19, 15, "tr", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.tafs);
  }
}

var LongTafComponent = class _LongTafComponent {
  constructor(tafService) {
    this.tafService = tafService;
    this.tafs = [];
    this.loading = true;
    this.error = null;
  }

  ngOnInit() {
    this.tafService.getAll().subscribe({
      next: (data) => {
        this.tafs = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch Long TAF data";
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function LongTafComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LongTafComponent)(\u0275\u0275directiveInject(LongTafService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _LongTafComponent,
      selectors: [["app-long-taf"]],
      decls: 8,
      vars: 3,
      consts: [["class", "text-muted", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["cTable", "", "hover", "", "responsive", "", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], ["cTable", "", "hover", "", "responsive", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["color", "success", 4, "ngIf"], ["color", "danger", 4, "ngIf"], ["color", "warning", 4, "ngIf"], ["color", "success"], ["color", "danger"], ["color", "warning"]],
      template: function LongTafComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-card")(1, "c-card-header")(2, "strong");
          \u0275\u0275text(3, "Long TAF Records");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "c-card-body");
          \u0275\u0275template(5, LongTafComponent_div_5_Template, 2, 0, "div", 0)(6, LongTafComponent_div_6_Template, 2, 1, "div", 1)(7, LongTafComponent_table_7_Template, 21, 1, "table", 2);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LongTafComponent, [{
    type: Component,
    args: [{
      selector: "app-long-taf", standalone: true, imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        TableDirective,
        BadgeComponent
      ], template: `<c-card>
  <c-card-header><strong>Long TAF Records</strong></c-card-header>
  <c-card-body>

    <div *ngIf="loading" class="text-muted">Loading...</div>
    <div *ngIf="error" class="text-danger">{{ error }}</div>

    <table *ngIf="!loading && !error" cTable hover responsive>
      <thead>
      <tr>
        <th>Station</th>
        <th>Observed At</th>
        <th>Validity</th>
        <th>Wind</th>
        <th>Visibility</th>
        <th>Clouds</th>
        <th>Conditions</th>
        <th>Flags</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let t of tafs">
        <td>{{ t.station }}</td>
        <td>{{ t.observedAt }}</td>
        <td *ngIf="t.validity">
          {{ t.validity.startDay }}/{{ t.validity.startHour }}Z \u2013
          {{ t.validity.endDay }}/{{ t.validity.endHour }}Z
        </td>
        <td *ngIf="!t.validity">\u2014</td>
        <td *ngIf="t.wind">
          {{ t.wind.direction }} {{ t.wind.directionDegrees }}\xB0 / {{ t.wind.speed }} kt
        </td>
        <td *ngIf="!t.wind">\u2014</td>
        <td *ngIf="t.visibility">{{ t.visibility.value }} {{ t.visibility.unit }}</td>
        <td *ngIf="!t.visibility">\u2014</td>
        <td>{{ t.clouds.length ? t.clouds.map(c => c.formatted).join(', ') : '\u2014' }}</td>
        <td>{{ t.conditions.length ? t.conditions.map(c => c.formatted).join(', ') : '\u2014' }}</td>
        <td>
          <c-badge *ngIf="t.isCAVOK" color="success">CAVOK</c-badge>
          <c-badge *ngIf="t.isCancelled" color="danger">CANX</c-badge>
          <c-badge *ngIf="t.isCorrected" color="warning">COR</c-badge>
        </td>
      </tr>
      </tbody>
    </table>

  </c-card-body>
</c-card>
`
    }]
  }], () => [{type: LongTafService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LongTafComponent, {
    className: "LongTafComponent",
    filePath: "src/app/views/taf/long-taf.component.ts",
    lineNumber: 17
  });
})();
export {
  LongTafComponent
};
//# sourceMappingURL=chunk-3C26FXBL.js.map
