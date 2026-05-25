export interface ValidityView {
  startDay: number;
  startHour: number;
  endDay: number;
  endHour: number;
}

export interface TempoView {
  cavok: boolean | null;
  probability: number | null;
  validity: ValidityView | null;
  type: string | null;
  clouds: CloudView[];
  conditions: WeatherConditionView[];
}

export interface ProbView {
  cavok: boolean | null;
  probability: number | null;
  validity: ValidityView | null;
  type: string | null;
  visibility: VisibilityView | null;
  clouds: CloudView[];
  conditions: WeatherConditionView[];
}

export interface BecmgView {
  cavok: boolean | null;
  validity: ValidityView | null;
  type: string | null;
  wind: WindView | null;
  clouds: CloudView[];
  conditions: WeatherConditionView[];
}

export interface LongTafView {
  id: number;
  station: string;
  observedAt: string;
  fetchedAt: string;
  message: string;
  isCAVOK: boolean | null;
  isCancelled: boolean | null;
  isCorrected: boolean | null;
  wind: WindView | null;
  visibility: VisibilityView | null;
  clouds: CloudView[];
  conditions: WeatherConditionView[];
  validity: ValidityView | null;
  tempos: TempoView[];
  probs: ProbView[];
  becmgs: BecmgView[];
}
