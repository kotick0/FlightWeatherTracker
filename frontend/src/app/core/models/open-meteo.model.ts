export interface CurrentView {
  time: string;
  interval: number;
  temperature2m: number | null;
  windSpeed10m: number | null;
  windDirection10m: number | null;
  windGusts10m: number | null;
  precipitation: number | null;
  rain: number | null;
  showers: number | null;
  snowfall: number | null;
  cloudCover: number | null;
  surfacePressure: number | null;
}

export interface HourlyView {
  time: string[];
  temperature2m: number[];
  dewPoint2m: number[];
  windSpeed10m: number[];
  windDirection10m: number[];
  windGusts10m: number[];
  visibility: number[];
  cloudCoverLow: number[];
  cloudCoverMid: number[];
  cloudCoverHigh: number[];
  surfacePressure: number[];
  snowfall: number[];
  snowDepth: number[];
  rain: number[];
  showers: number[];
}

export interface OpenMeteoView {
  id: number;
  fetchedAt: string;
  latitude: number;
  longitude: number;
  timezone: string;
  current: CurrentView | null;
  hourly: HourlyView | null;
}
