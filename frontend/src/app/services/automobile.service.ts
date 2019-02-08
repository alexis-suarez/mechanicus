import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { Automobile } from '../models/automobile';
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
export class AutomobileService {

  // Client List
  private list: Array<Automobile>;

  // API URL
  private url = 'http://127.0.0.1:5000/api/automobile';
  // private url = 'http://argentum.sytes.net:5000/api/automobile';

  constructor(private http: HttpClient) {
    this.list = new Array<Automobile>();
  }

  // Function for List
  public addList(automobile: Automobile): void {
    this.list.push(automobile);
  }

  public delList(index: number): void {
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<Automobile> {
    return this.list;
  }

  public isEmpty(): boolean {
    return this.list.length !== 0;
  }

  // Http Request
  public post(automobile: Automobile): any {
    return this.http.post<Response>(this.url, JSON.stringify(automobile), httpOptions);
  }

  public delete(id: string): any {
    return this.http.delete<Response>(this.url + '/' + id, httpOptions);
  }

  public put(automobile: Automobile): any {
    return this.http.put<Response>(this.url, httpOptions);
  }

  public getOne(id: string): any {
    return this.http.get<Response>(this.url + '/' + id);
  }

  public get(id): any {
    return this.http.get<Response>(this.url + '/' + id, httpOptions);
  }
}
