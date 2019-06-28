import {Injectable} from '@angular/core';
import {Flight} from "../model/flight";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flightUrl: string = "/api/flights";

  constructor(private http: HttpClient) {
  }

  getAllFlightsByPage(index: number, size: number): Observable<any> {
    const url = `${this.flightUrl}?page=${index}&size=${size}`;
    return this.http.get(url);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.flightUrl}/all`);
  }

  addFlight(flight: Flight): Observable<any> {
    return this.http.post(this.flightUrl, flight);
  }

  deleteFlight(id: number) {
    const url = `${this.flightUrl}/${id}`;
    return this.http.delete(url);
  }

  addTouristToFlight(touristId: number, flightId: number) {
    const url = `${this.flightUrl}/${touristId}/${flightId}`;
    return this.http.post(url, null);
  }

  removeTouristFromFlight(touristId: number, flightId: number) {
    const url = `${this.flightUrl}/${touristId}/${flightId}`;
    return this.http.delete(url);
  }
}
