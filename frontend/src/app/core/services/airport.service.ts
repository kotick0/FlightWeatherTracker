import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {AirportView} from '../models/airport.model';

@Injectable({providedIn: 'root'})
export class AirportService {

  private readonly url = 'http://localhost:8080/api/airports';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<AirportView[]> {
    return this.http.get<AirportView[]>(this.url);
  }

  create(airport: Omit<AirportView, 'id'>): Observable<AirportView> {
    return this.http.post<AirportView>(this.url, airport);
  }

  update(id: number, airport: AirportView): Observable<AirportView> {
    return this.http.put<AirportView>(`${this.url}/${id}`, airport);
  }

  delete(id: number): Observable<void> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'}).pipe(map(() => undefined));
  }
}
