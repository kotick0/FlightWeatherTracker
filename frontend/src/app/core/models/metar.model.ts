export interface MetarView {
  id: number;
  station: string;
  observedAt: string;
  fetchedAt: string;
  message: string;
  temperature: number | null;
  dewPoint: number | null;
  altimeter: number | null;
  isCavok: boolean | null;
  isCancelled: boolean | null;
  isCorrected: boolean | null;
  wind: WindView | null;
  visibility: VisibilityView | null;
  clouds: CloudView[];
  conditions: WeatherConditionView[];
}
