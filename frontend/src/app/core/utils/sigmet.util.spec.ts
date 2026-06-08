import {describe, it, expect, vi} from 'vitest';
import {isSigmetValid} from './sigmet.util';
import {SigmetView} from '../models/sigmet.model';

describe('isSigmetValid', () => {
  it('should return false if validFrom or validTo is missing', () => {
    const record1 = {validFrom: null, validTo: '2026-06-08T12:00:00.000Z'} as SigmetView;
    const record2 = {validFrom: '2026-06-08T10:00:00.000Z', validTo: null} as SigmetView;
    expect(isSigmetValid(record1)).toBe(false);
    expect(isSigmetValid(record2)).toBe(false);
  });

  it('should return true when now is between validFrom and validTo', () => {
    const record = {
      validFrom: '2026-06-08T09:00:00.000Z',
      validTo: '2026-06-08T11:00:00.000Z'
    } as SigmetView;
    
    // Mock the current time to 2026-06-08T10:00:00.000Z
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-08T10:00:00.000Z'));
    
    expect(isSigmetValid(record)).toBe(true);
    
    vi.useRealTimers();
  });

  it('should return false when now is before validFrom', () => {
    const record = {
      validFrom: '2026-06-08T10:30:00.000Z',
      validTo: '2026-06-08T11:00:00.000Z'
    } as SigmetView;
    
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-08T10:00:00.000Z'));
    
    expect(isSigmetValid(record)).toBe(false);
    
    vi.useRealTimers();
  });

  it('should return false when now is after validTo', () => {
    const record = {
      validFrom: '2026-06-08T09:00:00.000Z',
      validTo: '2026-06-08T09:30:00.000Z'
    } as SigmetView;
    
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-08T10:00:00.000Z'));
    
    expect(isSigmetValid(record)).toBe(false);
    
    vi.useRealTimers();
  });
});
