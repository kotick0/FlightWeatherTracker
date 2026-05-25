import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
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

// src/app/views/pages/login/login.component.ts
var LoginComponent = class _LoginComponent {
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _LoginComponent,
      selectors: [["app-login"]],
      decls: 36,
      vars: 3,
      consts: [[1, "bg-light", "dark:bg-transparent", "min-vh-100", "d-flex", "flex-row", "align-items-center"], ["breakpoint", "md"], [1, "justify-content-center"], ["lg", "10", "xl", "8"], [1, "p-4"], ["cForm", ""], [1, "text-body-secondary"], [1, "mb-3"], ["cInputGroupText", ""], ["cIcon", "", "name", "cilUser"], ["autoComplete", "username", "cFormControl", "", "placeholder", "Username"], [1, "mb-4"], ["cIcon", "", "name", "cilLockLocked"], ["autoComplete", "current-password", "cFormControl", "", "placeholder", "Password", "type", "password"], ["xs", "6"], ["cButton", "", "color", "primary", 1, "px-4"], ["xs", "6", 1, "text-end"], ["cButton", "", "color", "link", 1, "px-0"], [1, "text-white", "bg-primary", "py-5"], [1, "text-center"], ["cButton", "", "color", "primary", "routerLink", "/register", 1, "mt-3", 3, "active"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "c-container", 1)(2, "c-row", 2)(3, "c-col", 3)(4, "c-card-group")(5, "c-card", 4)(6, "c-card-body")(7, "form", 5)(8, "h1");
          \u0275\u0275text(9, "Login");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(10, "p", 6);
          \u0275\u0275text(11, "Sign In to your account");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "c-input-group", 7)(13, "span", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275element(14, "svg", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(15, "input", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(16, "c-input-group", 11)(17, "span", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275element(18, "svg", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(19, "input", 13);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(20, "c-row")(21, "c-col", 14)(22, "button", 15);
          \u0275\u0275text(23, " Login ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(24, "c-col", 16)(25, "button", 17);
          \u0275\u0275text(26, " Forgot password? ");
          \u0275\u0275elementEnd()()()()()();
          \u0275\u0275elementStart(27, "c-card", 18)(28, "c-card-body", 19)(29, "div")(30, "h2");
          \u0275\u0275text(31, "Sign up");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(32, "p");
          \u0275\u0275text(33, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(34, "button", 20);
          \u0275\u0275text(35, " Register Now! ");
          \u0275\u0275elementEnd()()()()()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(27);
          \u0275\u0275styleProp("min-width", 44, "%");
          \u0275\u0275advance(7);
          \u0275\u0275property("active", true);
        }
      },
      dependencies: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
      template: '<div class="bg-light dark:bg-transparent min-vh-100 d-flex flex-row align-items-center">\n  <c-container breakpoint="md">\n    <c-row class="justify-content-center">\n      <c-col lg="10" xl="8">\n        <c-card-group>\n          <c-card class="p-4">\n            <c-card-body>\n              <form cForm>\n                <h1>Login</h1>\n                <p class="text-body-secondary">Sign In to your account</p>\n                <c-input-group class="mb-3">\n                  <span cInputGroupText>\n                    <svg cIcon name="cilUser"></svg>\n                  </span>\n                  <input autoComplete="username" cFormControl placeholder="Username" />\n                </c-input-group>\n                <c-input-group class="mb-4">\n                  <span cInputGroupText>\n                    <svg cIcon name="cilLockLocked"></svg>\n                  </span>\n                  <input\n                    autoComplete="current-password"\n                    cFormControl\n                    placeholder="Password"\n                    type="password"\n                  />\n                </c-input-group>\n                <c-row>\n                  <c-col xs="6">\n                    <button cButton class="px-4" color="primary">\n                      Login\n                    </button>\n                  </c-col>\n                  <c-col class="text-end" xs="6">\n                    <button cButton class="px-0" color="link">\n                      Forgot password?\n                    </button>\n                  </c-col>\n                </c-row>\n              </form>\n            </c-card-body>\n          </c-card>\n          <c-card [style.minWidth.%]="44" class="text-white bg-primary py-5">\n            <c-card-body class="text-center">\n              <div>\n                <h2>Sign up</h2>\n                <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                  tempor incididunt ut labore et dolore magna aliqua.\n                </p>\n                <button [active]="true" cButton class="mt-3" color="primary" routerLink="/register">\n                  Register Now!\n                </button>\n              </div>\n            </c-card-body>\n          </c-card>\n        </c-card-group>\n      </c-col>\n    </c-row>\n  </c-container>\n</div>\n'
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, {
    className: "LoginComponent",
    filePath: "src/app/views/pages/login/login.component.ts",
    lineNumber: 22
  });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-U3I7DLH3.js.map
