import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MetarThresholdsView, TafThresholdsView, SigmetThresholdsView} from '../models/thresholds.model';

@Injectable({
  providedIn: 'root'
})
export class ThresholdsService {
  private readonly baseUrl = 'http://localhost:8080/api/thresholds';

  constructor(private http: HttpClient) {}

  getMetar(): Observable<MetarThresholdsView> {
    return this.http.get<MetarThresholdsView>(`${this.baseUrl}/metar`);
  }

  updateMetar(view: MetarThresholdsView): Observable<MetarThresholdsView> {
    return this.http.put<MetarThresholdsView>(`${this.baseUrl}/metar`, view);
  }

  getTaf(): Observable<TafThresholdsView> {
    return this.http.get<TafThresholdsView>(`${this.baseUrl}/taf`);
  }

  updateTaf(view: TafThresholdsView): Observable<TafThresholdsView> {
    return this.http.put<TafThresholdsView>(`${this.baseUrl}/taf`, view);
  }

  getSigmet(): Observable<SigmetThresholdsView> {
    return this.http.get<SigmetThresholdsView>(`${this.baseUrl}/sigmet`);
  }

  updateSigmet(view: SigmetThresholdsView): Observable<SigmetThresholdsView> {
    return this.http.put<SigmetThresholdsView>(`${this.baseUrl}/sigmet`, view);
  }
}
