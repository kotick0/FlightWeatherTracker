import {HttpParams} from "./chunk-XWN6YHZC.js";

// src/app/core/utils/reports-query.util.ts
function normalizeHoursValue(value) {
  const parsed = typeof value === "number" ? value : parseInt(String(value ?? ""), 10);
  if (isNaN(parsed) || parsed < 1) {
    return 1;
  }
  return Math.floor(parsed);
}

function normalizeIcaos(icaos) {
  return [...new Set(icaos.map((code) => code.trim().toUpperCase()).filter(Boolean))];
}

function buildFilteredReportParams(icaos, hours) {
  const stations = normalizeIcaos(icaos);
  return new HttpParams().set("hours", hours).set("icaos", stations.join(","));
}

function filterRecordsByStations(records, icaos) {
  const allowed = new Set(normalizeIcaos(icaos));
  return records.filter((record) => allowed.has(record.station.toUpperCase()));
}

export {
  normalizeHoursValue,
  buildFilteredReportParams,
  filterRecordsByStations
};
//# sourceMappingURL=chunk-5LU64T2P.js.map
