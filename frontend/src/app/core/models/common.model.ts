export interface WindView {
  unit: string;
  direction: string;
  directionDegrees: number | null;
  speed: number | null;
}

export interface VisibilityView {
  unit: string;
  mainVisibility: string;
  value: number | null;
}

export interface CloudView {
  quantity: string;
  height: number | null;
  formatted: string;
}

export interface WeatherConditionView {
  intensity: string | null;
  phenomenons: string[];
  valid: boolean | null;
  formatted: string;
}
