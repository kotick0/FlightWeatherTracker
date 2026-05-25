import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TafView} from '../models/taf.model';

@Injectable({providedIn: 'root'})
export class ShortTafService {

  private readonly url = 'http://localhost:8080/api/taf/short';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TafView[]> {
    return this.http.get<TafView[]>(this.url);
  }
}
