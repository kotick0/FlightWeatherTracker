export interface MetarThresholdsView {
  minVisibility: number;
  minCloudHeight: number;
  maxCloudQuantity: string;
  minAltimeter: number;
  maxTemperature: number;
  maxWindSpeed: number;
  maxGustSpeed: number;
  maxWeatherIntensity: string;
  windShear: boolean;
  cancellingPhenomenon: string[];
  operationallySignificantPhenomena: string[];
}

export interface TafThresholdsView {
  minVisibility: number;
  minCloudHeight: number;
  maxCloudQuantity: string;
  cancellingCloudType: string;
  maxWindSpeed: number;
  maxGustSpeed: number;
  minTempoProbability: number;
  cancellingPhenomenon: string[];
  operationallySignificantPhenomena: string[];
}

export interface SigmetThresholdsView {
  minFlightLevel: number;
  maxFlightLevel: number;
  maxIntensity: string;
  wmoOperationallySignificant: string[];
  wmoCancelling: string[];
  phenomenaOperationallySignificant: string[];
  phenomenaCancelling: string[];
}
