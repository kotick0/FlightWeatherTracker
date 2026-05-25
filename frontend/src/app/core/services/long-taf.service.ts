import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TafView} from '../models/taf.model';
import {buildFilteredReportParams} from '../utils/reports-query.util';

@Injectable({providedIn: 'root'})
export class LongTafService {

  private readonly url = 'http://localhost:8080/api/taf/long';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TafView[]> {
    return this.http.get<TafView[]>(this.url);
  }

  getFiltered(icaos: string[], hours: number): Observable<TafView[]> {
    return this.http.get<TafView[]>(this.url, {
      params: buildFilteredReportParams(icaos, hours),
    });
  }
}
