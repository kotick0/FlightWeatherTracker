import {SigmetView} from '../models/sigmet.model';

export function isSigmetValid(record: SigmetView): boolean {
  if (!record.validFrom || !record.validTo) {
    return false;
  }
  const now = new Date();
  const fromDate = new Date(record.validFrom);
  const toDate = new Date(record.validTo);
  return now >= fromDate && now <= toDate;
}
