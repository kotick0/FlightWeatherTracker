export interface WindView {
  direction: number | null;
  speed: number | null;
  gusts: number | null;
}

export interface VisibilityView {
  distance: number | null;
  unit: string | null;
}

export interface CloudView {
  type: string | null;
  altitude: number | null;
  amount: string | null;
}

export interface WeatherConditionView {
  code: string | null;
  description: string | null;
}

