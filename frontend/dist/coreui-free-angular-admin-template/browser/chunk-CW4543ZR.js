import {buildFilteredReportParams} from "./chunk-5LU64T2P.js";
import {HttpClient} from "./chunk-XWN6YHZC.js";
import {Injectable, setClassMetadata} from "./chunk-XOYR7VWH.js";

// src/app/core/services/long-taf.service.ts
var LongTafService = class _LongTafService {
  constructor(http) {
    this.http = http;
    this.url = "http://localhost:8080/api/taf/long";
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
    this.\u0275fac = function LongTafService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LongTafService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LongTafService,
      factory: _LongTafService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LongTafService, [{
    type: Injectable,
    args: [{providedIn: "root"}]
  }], () => [{type: HttpClient}], null);
})();

export {
  LongTafService
};
//# sourceMappingURL=chunk-CW4543ZR.js.map
