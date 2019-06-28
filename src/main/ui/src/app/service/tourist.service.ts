import {Injectable} from '@angular/core';
import {Tourist} from "../model/tourist";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private touristUrl: string = "/api/tourists";

  constructor(private http: HttpClient) {
  }

  getAllTouristsByPage(index: number, size: number): Observable<any> {
    const url = `${this.touristUrl}?page=${index}&size=${size}`;
    return this.http.get(url);
  }

  addTourist(tourist: Tourist): Observable<any> {
    return this.http.post(this.touristUrl, tourist);
  }

  deleteTourist(id: number) {
    const url = `${this.touristUrl}/${id}`;
    return this.http.delete(url);
  }

  search(term: string): Observable<any> {
    if (term.length != 0) {
      const url = `${this.touristUrl}/search/${term}`;
      return this.http.get(url)
    } else {
      return of([])
    }
  }
}
