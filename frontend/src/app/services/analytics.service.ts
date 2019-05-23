import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// API's
import { environment } from 'src/environments/environment';

// Models
import { Response } from '../models/response';

// Header Options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  // API URL
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getTransmision(): any {
    return this.http.get<Response>(this.url + 'transmision', httpOptions);
  }

  public getAmountService(): any {
    return this.http.get<Response>(this.url + 'amountservice', httpOptions);
  }

  public getCorrelation(): any {
    return this.http.get<Response>(this.url + 'correlation', httpOptions);
  }
}
