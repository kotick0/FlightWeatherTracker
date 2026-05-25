import {HttpClient} from "./chunk-XWN6YHZC.js";
import {Injectable, map, setClassMetadata} from "./chunk-XOYR7VWH.js";

// src/app/core/services/airport.service.ts
var AirportService = class _AirportService {
  constructor(http) {
    this.http = http;
    this.url = "http://localhost:8080/api/airports";
  }

  getAll() {
    return this.http.get(this.url);
  }

  create(airport) {
    return this.http.post(this.url, airport);
  }

  update(id, airport) {
    return this.http.put(`${this.url}/${id}`, airport);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`, {responseType: "text"}).pipe(map(() => void 0));
  }

  static {
    this.\u0275fac = function AirportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AirportService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AirportService,
      factory: _AirportService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AirportService, [{
    type: Injectable,
    args: [{providedIn: "root"}]
  }], () => [{type: HttpClient}], null);
})();

export {
  AirportService
};
//# sourceMappingURL=chunk-CRQQ6BLH.js.map
