export interface SigmetFeatureView {
  geometryType: string;
  coordinates: number[][][];
  phenomenon: string | null;
  phenomenonDescription: string | null;
  flightLevel: string | null;
  intensity: string | null;
  observationType: string | null;
  movementDirection: string | null;
  movement: string | null;
  validPeriod: string | null;
}

export interface SigmetView {
  id: number;
  fetchedAt: string;
  station: string;
  type: string | null;
  area: string | null;
  sequenceNumber: string | null;
  bbb: string | null;
  timeGroup: number | null;
  isCancelled: boolean | null;
  cancellationId: string | null;
  cancellationValidPeriod: string | null;
  validFrom: string | null;
  validTo: string | null;
  transmissionTime: string | null;
  isValid: boolean | null;
  message: string;
  features: SigmetFeatureView[];
}
