@Injectable({providedIn: 'root'})
export class MetarService {
  private readonly url = 'http://localhost:8080/api/metar';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<MetarView[]> {
    return this.http.get<MetarView[]>(this.url);
  }
}
