import {Injectable} from '@angular/core';
import {normalizeHoursValue} from '../utils/reports-query.util';

export const REPORTS_FILTER_KEYS = {
  metar: {
    selectedIcaos: 'fwt.reports.metar.selectedIcaos',
    hours: 'fwt.reports.metar.hours',
  },
  taf: {
    selectedIcaos: 'fwt.reports.taf.selectedIcaos',
    tafType: 'fwt.reports.taf.tafType',
    longHours: 'fwt.reports.taf.longHours',
    shortHours: 'fwt.reports.taf.shortHours',
  },
} as const;

const VALID_TAF_TYPES = ['Long TAF', 'Short TAF'] as const;
const LEGACY_TIME_RANGE_KEY = 'fwt.reports.metar.timeRange';
const LEGACY_LONG_TIME_RANGE_KEY = 'fwt.reports.taf.longTimeRange';
const LEGACY_SHORT_TIME_RANGE_KEY = 'fwt.reports.taf.shortTimeRange';

@Injectable({providedIn: 'root'})
export class ReportsFilterPreferencesService {

  getString(key: string, fallback: string): string {
    try {
      const value = localStorage.getItem(key);
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }

  setString(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore quota / private mode errors
    }
  }

  getStringArray(key: string): string[] {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
    } catch {
      return [];
    }
  }

  setStringArray(key: string, values: string[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(values));
    } catch {
      // ignore quota / private mode errors
    }
  }

  getMetarHours(): number {
    return this.getHours(REPORTS_FILTER_KEYS.metar.hours, LEGACY_TIME_RANGE_KEY, 1);
  }

  setMetarHours(hours: number): void {
    this.setHours(REPORTS_FILTER_KEYS.metar.hours, hours);
  }

  getTafType(): string {
    const value = this.getString(REPORTS_FILTER_KEYS.taf.tafType, 'Long TAF');
    return VALID_TAF_TYPES.includes(value as (typeof VALID_TAF_TYPES)[number]) ? value : 'Long TAF';
  }

  setTafType(value: string): void {
    this.setString(REPORTS_FILTER_KEYS.taf.tafType, value);
  }

  getTafLongHours(): number {
    return this.getHours(REPORTS_FILTER_KEYS.taf.longHours, LEGACY_LONG_TIME_RANGE_KEY, 1);
  }

  setTafLongHours(hours: number): void {
    this.setHours(REPORTS_FILTER_KEYS.taf.longHours, hours);
  }

  getTafShortHours(): number {
    return this.getHours(REPORTS_FILTER_KEYS.taf.shortHours, LEGACY_SHORT_TIME_RANGE_KEY, 1);
  }

  setTafShortHours(hours: number): void {
    this.setHours(REPORTS_FILTER_KEYS.taf.shortHours, hours);
  }

  private getHours(key: string, legacyKey: string, fallback: number): number {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        return normalizeHoursValue(raw);
      }
      const legacy = localStorage.getItem(legacyKey);
      if (legacy !== null) {
        return this.parseLegacyTimeRange(legacy, fallback);
      }
    } catch {
      // ignore
    }
    return fallback;
  }

  private setHours(key: string, hours: number): void {
    try {
      localStorage.setItem(key, String(normalizeHoursValue(hours)));
    } catch {
      // ignore
    }
  }

  private parseLegacyTimeRange(value: string, fallback: number): number {
    switch (value) {
      case 'Last 2 hours':
        return 2;
      case 'Last 3 hours':
        return 3;
      case 'Last hour':
        return 1;
      default: {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? fallback : normalizeHoursValue(parsed);
      }
    }
  }
}
