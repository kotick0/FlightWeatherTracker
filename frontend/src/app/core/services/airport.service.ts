import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AirportView} from '../models/airport.model';

@Injectable({providedIn: 'root'})
export class AirportService {

  private readonly url = 'http://localhost:8080/api/airports';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<AirportView[]> {
    return this.http.get<AirportView[]>(this.url);
  }
}
