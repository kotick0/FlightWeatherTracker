import {CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent} from "./chunk-XWN6YHZC.js";
import {Component, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _DashboardComponent,
      selectors: [["ng-component"]],
      decls: 8,
      vars: 0,
      consts: [["xs", "12"], [1, "mb-0", "text-body-secondary"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card")(3, "c-card-header");
          \u0275\u0275text(4, "Flight Weather Tracker");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "c-card-body")(6, "p", 1);
          \u0275\u0275text(7, " Template content has been removed. Build your weather dashboard modules here. ");
          \u0275\u0275elementEnd()()()()();
        }
      },
      dependencies: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent],
      styles: ["\n[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: x-small;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{
      imports: [CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent],
      template: '<c-row>\n  <c-col xs="12">\n    <c-card>\n      <c-card-header>Flight Weather Tracker</c-card-header>\n      <c-card-body>\n        <p class="mb-0 text-body-secondary">\n          Template content has been removed. Build your weather dashboard modules here.\n        </p>\n      </c-card-body>\n    </c-card>\n  </c-col>\n</c-row>\n',
      styles: ["/* src/app/views/dashboard/dashboard.component.scss */\n:host .legend small {\n  font-size: x-small;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, {
    className: "DashboardComponent",
    filePath: "src/app/views/dashboard/dashboard.component.ts",
    lineNumber: 15
  });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-YXDAHLZ2.js.map
