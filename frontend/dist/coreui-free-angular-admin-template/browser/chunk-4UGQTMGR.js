import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  IconDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from "./chunk-XWN6YHZC.js";
import {Component, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/pages/register/register.component.ts
var RegisterComponent = class _RegisterComponent {
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _RegisterComponent,
      selectors: [["app-register"]],
      decls: 30,
      vars: 0,
      consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], [1, "justify-content-center"], ["lg", "7", "md", "9", "xl", "6"], [1, "mx-4"], [1, "p-4"], ["cForm", ""], [1, "text-body-secondary"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["autoComplete", "name", "cFormControl", "", "placeholder", "Username"], ["autoComplete", "email", "cFormControl", "", "placeholder", "Email"], ["cIcon", "", "name", "cilLockLocked"], ["autoComplete", "new-password", "cFormControl", "", "placeholder", "Password", "type", "password"], [1, "mb-4"], ["autoComplete", "new-password", "cFormControl", "", "placeholder", "Repeat password", "type", "password"], [1, "d-grid"], ["cButton", "", "color", "success"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "c-container")(2, "c-row", 1)(3, "c-col", 2)(4, "c-card", 3)(5, "c-card-body", 4)(6, "form", 5)(7, "h1");
          \u0275\u0275text(8, "Register");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "p", 6);
          \u0275\u0275text(10, "Create your account");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(11, "c-input-group", 7)(12, "span", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275element(13, "svg", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(14, "input", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(15, "c-input-group", 7)(16, "span", 8);
          \u0275\u0275text(17, "@");
          \u0275\u0275elementEnd();
          \u0275\u0275element(18, "input", 11);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(19, "c-input-group", 7)(20, "span", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275element(21, "svg", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(22, "input", 13);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(23, "c-input-group", 14)(24, "span", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275element(25, "svg", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(26, "input", 15);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(27, "div", 16)(28, "button", 17);
          \u0275\u0275text(29, "Create Account");
          \u0275\u0275elementEnd()()()()()()()()();
        }
      },
      dependencies: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{
      selector: "app-register",
      imports: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
      template: '<div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\n  <c-container>\n    <c-row class="justify-content-center">\n      <c-col lg="7" md="9" xl="6">\n        <c-card class="mx-4">\n          <c-card-body class="p-4">\n            <form cForm>\n              <h1>Register</h1>\n              <p class="text-body-secondary">Create your account</p>\n              <c-input-group class="mb-3">\n                <span cInputGroupText>\n                  <svg cIcon name="cilUser"></svg>\n                </span>\n                <input autoComplete="name" cFormControl placeholder="Username" />\n              </c-input-group>\n              <c-input-group class="mb-3">\n                <span cInputGroupText>&#64;</span>\n                <input autoComplete="email" cFormControl placeholder="Email" />\n              </c-input-group>\n              <c-input-group class="mb-3">\n                <span cInputGroupText>\n                  <svg cIcon name="cilLockLocked"></svg>\n                </span>\n                <input autoComplete="new-password" cFormControl placeholder="Password" type="password" />\n              </c-input-group>\n              <c-input-group class="mb-4">\n                <span cInputGroupText>\n                  <svg cIcon name="cilLockLocked"></svg>\n                </span>\n                <input autoComplete="new-password" cFormControl placeholder="Repeat password" type="password" />\n              </c-input-group>\n              <div class="d-grid">\n                <button cButton color="success">Create Account</button>\n              </div>\n            </form>\n          </c-card-body>\n        </c-card>\n      </c-col>\n    </c-row>\n  </c-container>\n</div>\n'
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, {
    className: "RegisterComponent",
    filePath: "src/app/views/pages/register/register.component.ts",
    lineNumber: 21
  });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-4UGQTMGR.js.map
