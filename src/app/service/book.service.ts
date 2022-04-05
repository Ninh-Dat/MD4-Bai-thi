import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.Aip_URL + 'books');
  }

  getById(id): Observable<any> {
    return this.http.get(environment.Aip_URL + `books/${id}`);
  }

  createBook(data): Observable<any> {
    return this.http.post(environment.Aip_URL + `books`, data);
  }

  updateBook(id, data): Observable<any> {
    return this.http.put(environment.Aip_URL + `books/${id}`, data);
  }
  deteteBook(id): Observable<any> {
    return this.http.delete(environment.Aip_URL + `books/${id}`);
  }
}
