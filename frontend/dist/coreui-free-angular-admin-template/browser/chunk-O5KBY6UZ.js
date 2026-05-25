import {AirportService} from "./chunk-CRQQ6BLH.js";
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

// src/app/views/airports/airports.component.ts
function AirportsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function AirportsComponent_div_6_Template(rf, ctx) {
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

function AirportsComponent_table_7_tr_16_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td")(12, "c-badge", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.icao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.latitude);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.longitude);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", a_r2.isMilitary ? "danger" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r2.isMilitary ? "Military" : "Civil", " ");
  }
}

function AirportsComponent_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 5)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ICAO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AirportsComponent_table_7_tr_16_Template, 14, 7, "tr", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.airports);
  }
}

var AirportsComponent = class _AirportsComponent {
  constructor(airportService) {
    this.airportService = airportService;
    this.airports = [];
    this.loading = true;
    this.error = null;
  }

  ngOnInit() {
    this.airportService.getAll().subscribe({
      next: (data) => {
        this.airports = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch airports";
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function AirportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AirportsComponent)(\u0275\u0275directiveInject(AirportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _AirportsComponent,
      selectors: [["app-airports"]],
      decls: 8,
      vars: 3,
      consts: [["class", "text-muted", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["cTable", "", "hover", "", "responsive", "", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], ["cTable", "", "hover", "", "responsive", ""], [4, "ngFor", "ngForOf"], [3, "color"]],
      template: function AirportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-card")(1, "c-card-header")(2, "strong");
          \u0275\u0275text(3, "Airports");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "c-card-body");
          \u0275\u0275template(5, AirportsComponent_div_5_Template, 2, 0, "div", 0)(6, AirportsComponent_div_6_Template, 2, 1, "div", 1)(7, AirportsComponent_table_7_Template, 17, 1, "table", 2);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AirportsComponent, [{
    type: Component,
    args: [{
      selector: "app-airports", standalone: true, imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        TableDirective,
        BadgeComponent
      ], template: `<c-card>
  <c-card-header><strong>Airports</strong></c-card-header>
  <c-card-body>

    <div *ngIf="loading" class="text-muted">Loading...</div>
    <div *ngIf="error" class="text-danger">{{ error }}</div>

    <table *ngIf="!loading && !error" cTable hover responsive>
      <thead>
      <tr>
        <th>ICAO</th>
        <th>Name</th>
        <th>City</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Type</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let a of airports">
        <td>{{ a.icao }}</td>
        <td>{{ a.name }}</td>
        <td>{{ a.city }}</td>
        <td>{{ a.latitude }}</td>
        <td>{{ a.longitude }}</td>
        <td>
          <c-badge [color]="a.isMilitary ? 'danger' : 'success'">
            {{ a.isMilitary ? 'Military' : 'Civil' }}
          </c-badge>
        </td>
      </tr>
      </tbody>
    </table>

  </c-card-body>
</c-card>
`
    }]
  }], () => [{type: AirportService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirportsComponent, {
    className: "AirportsComponent",
    filePath: "src/app/views/airports/airports.component.ts",
    lineNumber: 17
  });
})();
export {
  AirportsComponent
};
//# sourceMappingURL=chunk-O5KBY6UZ.js.map
