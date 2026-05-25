import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CommonModule,
  HttpClient,
  NgIf
} from "./chunk-XWN6YHZC.js";
import {Component, Injectable, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/core/services/open-meteo.service.ts
var OpenMeteoService = class _OpenMeteoService {
  constructor(http) {
    this.http = http;
    this.url = "http://localhost:8080/api/open-meteo";
  }

  getLatest() {
    return this.http.get(this.url);
  }

  static {
    this.\u0275fac = function OpenMeteoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpenMeteoService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _OpenMeteoService,
      factory: _OpenMeteoService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenMeteoService, [{
    type: Injectable,
    args: [{providedIn: "root"}]
  }], () => [{type: HttpClient}], null);
})();

// src/app/views/open-meteo/open-meteo.component.ts
function OpenMeteoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}

function OpenMeteoComponent_div_6_Template(rf, ctx) {
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

function OpenMeteoComponent_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const current_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" G", current_r2.windGusts10m);
  }
}

function OpenMeteoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275template(5, OpenMeteoComponent_div_7_span_5_Template, 2, 1, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const current_r2 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Temperature: ", current_r2.temperature2m, " \xB0C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Wind: ", current_r2.windDirection10m, "\xB0 / ", current_r2.windSpeed10m, " km/h ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", current_r2.windGusts10m);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Precipitation: ", current_r2.precipitation, " mm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cloud Cover: ", current_r2.cloudCover, " %");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pressure: ", current_r2.surfacePressure, " hPa");
  }
}

var OpenMeteoComponent = class _OpenMeteoComponent {
  constructor(openMeteoService) {
    this.openMeteoService = openMeteoService;
    this.data = null;
    this.loading = true;
    this.error = null;
  }

  ngOnInit() {
    this.openMeteoService.getLatest().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Failed to fetch Open-Meteo data";
        this.loading = false;
      }
    });
  }

  static {
    this.\u0275fac = function OpenMeteoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpenMeteoComponent)(\u0275\u0275directiveInject(OpenMeteoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _OpenMeteoComponent,
      selectors: [["app-open-meteo"]],
      decls: 8,
      vars: 3,
      consts: [["class", "text-muted", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], [1, "text-muted"], [1, "text-danger"]],
      template: function OpenMeteoComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-card")(1, "c-card-header")(2, "strong");
          \u0275\u0275text(3, "Current Weather");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(4, "c-card-body");
          \u0275\u0275template(5, OpenMeteoComponent_div_5_Template, 2, 0, "div", 0)(6, OpenMeteoComponent_div_6_Template, 2, 1, "div", 1)(7, OpenMeteoComponent_div_7_Template, 12, 7, "div", 2);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275advance(5);
          \u0275\u0275property("ngIf", ctx.loading);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.error);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && (ctx.data == null ? null : ctx.data.current));
        }
      },
      dependencies: [CommonModule, NgIf, CardComponent, CardHeaderComponent, CardBodyComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenMeteoComponent, [{
    type: Component,
    args: [{
      selector: "app-open-meteo",
      standalone: true,
      imports: [
        CommonModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent
      ],
      template: '<c-card>\n  <c-card-header><strong>Current Weather</strong></c-card-header>\n  <c-card-body>\n\n    <div *ngIf="loading" class="text-muted">Loading...</div>\n    <div *ngIf="error" class="text-danger">{{ error }}</div>\n\n    <div *ngIf="!loading && !error && data?.current as current">\n      <p>Temperature: {{ current.temperature2m }} \xB0C</p>\n      <p>Wind: {{ current.windDirection10m }}\xB0 /\n        {{ current.windSpeed10m }} km/h\n        <span *ngIf="current.windGusts10m"> G{{ current.windGusts10m }}</span>\n      </p>\n      <p>Precipitation: {{ current.precipitation }} mm</p>\n      <p>Cloud Cover: {{ current.cloudCover }} %</p>\n      <p>Pressure: {{ current.surfacePressure }} hPa</p>\n    </div>\n\n  </c-card-body>\n</c-card>\n'
    }]
  }], () => [{type: OpenMeteoService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpenMeteoComponent, {
    className: "OpenMeteoComponent",
    filePath: "src/app/views/open-meteo/open-meteo.component.ts",
    lineNumber: 16
  });
})();
export {
  OpenMeteoComponent
};
//# sourceMappingURL=chunk-F7HWVGBS.js.map
