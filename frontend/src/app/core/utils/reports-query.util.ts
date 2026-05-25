import {HttpParams} from '@angular/common/http';

export function normalizeHoursValue(value: number | string | null | undefined): number {
  const parsed = typeof value === 'number' ? value : parseInt(String(value ?? ''), 10);
  if (isNaN(parsed) || parsed < 1) {
    return 1;
  }
  return Math.floor(parsed);
}

export function normalizeIcaos(icaos: string[]): string[] {
  return [...new Set(icaos.map(code => code.trim().toUpperCase()).filter(Boolean))];
}

export function buildFilteredReportParams(icaos: string[], hours: number): HttpParams {
  const stations = normalizeIcaos(icaos);
  return new HttpParams()
    .set('hours', hours)
    .set('icaos', stations.join(','));
}

/** Keep only rows whose station matches a selected ICAO (station = ICAO). */
export function filterRecordsByStations<T extends { station: string }>(
  records: T[],
  icaos: string[]
): T[] {
  const allowed = new Set(normalizeIcaos(icaos));
  return records.filter(record => allowed.has(record.station.toUpperCase()));
}
