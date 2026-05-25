import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenMeteoView} from '../models/open-meteo.model';

@Injectable({providedIn: 'root'})
export class OpenMeteoService {
  private readonly url = 'http://localhost:8080/api/open-meteo';

  constructor(private http: HttpClient) {
  }

  getLatest(): Observable<OpenMeteoView> {
    return this.http.get<OpenMeteoView>(this.url);
  }
}
