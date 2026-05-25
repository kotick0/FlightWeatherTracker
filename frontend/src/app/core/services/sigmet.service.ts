@Injectable({providedIn: 'root'})
export class SigmetService {
  private readonly url = 'http://localhost:8080/api/sigmet';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<SigmetView[]> {
    return this.http.get<SigmetView[]>(this.url);
  }
}
