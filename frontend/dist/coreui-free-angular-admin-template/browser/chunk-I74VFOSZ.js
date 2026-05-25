import {HttpClient} from "./chunk-XWN6YHZC.js";
import {Injectable, setClassMetadata} from "./chunk-XOYR7VWH.js";

// src/app/core/services/sigmet.service.ts
var SigmetService = class _SigmetService {
  constructor(http) {
    this.http = http;
    this.url = "http://localhost:8080/api/sigmet";
  }

  getAll() {
    return this.http.get(this.url);
  }

  static {
    this.\u0275fac = function SigmetService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SigmetService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SigmetService,
      factory: _SigmetService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigmetService, [{
    type: Injectable,
    args: [{providedIn: "root"}]
  }], () => [{type: HttpClient}], null);
})();

export {
  SigmetService
};
//# sourceMappingURL=chunk-I74VFOSZ.js.map
