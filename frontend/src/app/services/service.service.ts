import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { Service } from '../models/service';
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
export class ServiceService {

  // Service List
  private list: Array<Service>;

  // API URL
  private url = 'http://127.0.0.1:5000/api/service';

  constructor(private http: HttpClient) {
    this.list = [];
  }

  // Function for List
  public addList(service: Service): void {
    this.list.push(service);
  }

  public delList(index: number): void {
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<Service> {
    return this.list;
  }

  public isEmpty(): boolean {
    return this.list.length !== 0;
  }

  public setItemList(service: Service): void {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i].id === service.id) {
        this.list[i] = service;
      }
      i++;
    }
  }

  // Http Request
  public newService(service: Service): any {
    return this.http.post<Response>(this.url, JSON.stringify(service), httpOptions);
  }

  public delService(id: string): any {
    return this.http.delete<Response>(this.url + '/' + id, httpOptions);
  }

  public delServiceDeliver(id: string): any {
    return this.http.delete<Response>(this.url + '/deliver/' + id, httpOptions);
  }

  public delServiceFinish(id: string): any {
    return this.http.delete<Response>(this.url + '/finish/' + id, httpOptions);
  }

  public updService(id: string, service: Service): any {
    return this.http.put<Response>(this.url + '/' + id, JSON.stringify(Service), httpOptions);
  }

  public getService(id: string): any {
    return this.http.get<Response>(this.url + '/' + id);
  }

  public viewService(): any {
    return this.http.get<Response>(this.url, httpOptions);
  }

  public viewServiceDeliver(): any {
    return this.http.get<Response>(this.url + '/deliver/', httpOptions);
  }

  public viewServiceFinish(): any {
    return this.http.get<Response>(this.url + '/finish/', httpOptions);
  }
}
