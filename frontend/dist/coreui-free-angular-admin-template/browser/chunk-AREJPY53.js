import {
  ButtonDirective,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from "./chunk-XWN6YHZC.js";
import {Component, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/pages/page500/page500.component.ts
var Page500Component = class _Page500Component {
  static {
    this.\u0275fac = function Page500Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Page500Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _Page500Component,
      selectors: [["app-page500"]],
      decls: 17,
      vars: 0,
      consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["md", "6"], [1, "clearfix"], [1, "float-start", "display-3", "me-4"], [1, "pt-3"], [1, "text-body-secondary", "float-start"], [1, "input-prepend"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilMagnifyingGlass"], ["cFormControl", "", "placeholder", "What are you looking for?", "type", "text"], ["cButton", "", "color", "info"]],
      template: function Page500Component_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "span", 3)(5, "h1", 4);
          \u0275\u0275text(6, "500");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(7, "h4", 5);
          \u0275\u0275text(8, "Houston, we have a problem!");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "p", 6);
          \u0275\u0275text(10, " The page you are looking for is temporarily unavailable. ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(11, "c-input-group", 7)(12, "span", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275element(13, "svg", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(14, "input", 10);
          \u0275\u0275elementStart(15, "button", 11);
          \u0275\u0275text(16, "Search");
          \u0275\u0275elementEnd()()()()()();
        }
      },
      dependencies: [ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Page500Component, [{
    type: Component,
    args: [{
      selector: "app-page500",
      imports: [ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
      template: '<div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\n  <c-container>\n    <c-row class="justify-content-center">\n      <c-col md="6">\n        <span class="clearfix">\n          <h1 class="float-start display-3 me-4">500</h1>\n          <h4 class="pt-3">Houston, we have a problem!</h4>\n          <p class="text-body-secondary float-start">\n            The page you are looking for is temporarily unavailable.\n          </p>\n        </span>\n        <c-input-group class="input-prepend">\n          <span cInputGroupText>\n            <svg cIcon name="cilMagnifyingGlass"></svg>\n          </span>\n          <input cFormControl placeholder="What are you looking for?" type="text" />\n          <button cButton color="info">Search</button>\n        </c-input-group>\n      </c-col>\n    </c-row>\n  </c-container>\n</div>\n'
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page500Component, {
    className: "Page500Component",
    filePath: "src/app/views/pages/page500/page500.component.ts",
    lineNumber: 18
  });
})();
export {
  Page500Component
};
//# sourceMappingURL=chunk-AREJPY53.js.map
