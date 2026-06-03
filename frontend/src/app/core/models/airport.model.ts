export interface AirportView {
  id: number;
  name: string;
  icao: string;
  city: string;
  latitude: number;
  longitude: number;
  isMilitary: boolean;
  metarDangerFactor?: number;
  tafDangerFactor?: number;
  sigmetDangerFactor?: number;
}
