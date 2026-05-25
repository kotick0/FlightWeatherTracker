import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SigmetView} from '../models/sigmet.model';

@Injectable({providedIn: 'root'})
export class SigmetService {
  private readonly url = 'http://localhost:8080/api/sigmet';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SigmetView[]> {
    return this.http.get<SigmetView[]>(this.url);
  }
}
