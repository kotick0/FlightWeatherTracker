@Injectable({providedIn: 'root'})
export class OpenMeteoService {
  private readonly url = 'http://localhost:8080/api/open-meteo';

  constructor(private http: HttpClient) {
  }

  getLatest(): Observable<OpenMeteoView> {
    return this.http.get<OpenMeteoView>(this.url);
  }
}
