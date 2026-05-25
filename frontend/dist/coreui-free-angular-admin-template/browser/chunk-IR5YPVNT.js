import {buildFilteredReportParams} from "./chunk-5LU64T2P.js";
import {HttpClient} from "./chunk-XWN6YHZC.js";
import {Injectable, setClassMetadata} from "./chunk-XOYR7VWH.js";

// src/app/core/services/short-taf.service.ts
var ShortTafService = class _ShortTafService {
  constructor(http) {
    this.http = http;
    this.url = "http://localhost:8080/api/taf/short";
  }

  getAll() {
    return this.http.get(this.url);
  }

  getFiltered(icaos, hours) {
    return this.http.get(this.url, {
      params: buildFilteredReportParams(icaos, hours)
    });
  }

  static {
    this.\u0275fac = function ShortTafService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShortTafService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ShortTafService,
      factory: _ShortTafService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShortTafService, [{
    type: Injectable,
    args: [{providedIn: "root"}]
  }], () => [{type: HttpClient}], null);
})();

export {
  ShortTafService
};
//# sourceMappingURL=chunk-IR5YPVNT.js.map
