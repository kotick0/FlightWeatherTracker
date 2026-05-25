import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MetarView} from '../models/metar.model';
import {buildFilteredReportParams} from '../utils/reports-query.util';

@Injectable({providedIn: 'root'})
export class MetarService {
  private readonly url = 'http://localhost:8080/api/metar';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<MetarView[]> {
    return this.http.get<MetarView[]>(this.url);
  }

  getFiltered(icaos: string[], hours: number): Observable<MetarView[]> {
    return this.http.get<MetarView[]>(this.url, {
      params: buildFilteredReportParams(icaos, hours),
    });
  }
}
