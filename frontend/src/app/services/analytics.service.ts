import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private url = 'http://127.0.0.1:5000/api/analytics';
  // private url = 'http://argentum.sytes.net:5000/api/analytics';

  constructor(private http: HttpClient) { }
}
