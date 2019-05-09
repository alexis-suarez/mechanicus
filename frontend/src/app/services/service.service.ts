import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// API's
import { environment } from 'src/environments/environment';

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

  // Service Main List
  private list: Array<Service>;
  private listPending: Array<Service>;
  private listFinished: Array<Service>;
  private listDelivered: Array<Service>;

  // API URL
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.list = new Array<Service>();
    this.listPending = new Array<Service>();
    this.listFinished = new Array<Service>();
    this.listDelivered = new Array<Service>();
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

  public getListPending(): Array<Service> {
    return this.listPending = this.list.filter(item => {
      return item.finished === false && item.delived === false;
    });
  }

  public getListFinished(): Array<Service> {
    return this.listFinished = this.list.filter(item => {
      return item.finished === true && item.delived === false;
    });
  }

  public getListDelivered(): Array<Service> {
    return this.listDelivered = this.list.filter(item => {
      return item.finished === true && item.delived === true;
    });
  }

  public isEmpty(): boolean {
    return this.list.length === 0;
  }

  public isEmptyListPending(): boolean {
    return this.listPending.length === 0;
  }

  public isEmptyListFinished(): boolean {
    return this.listFinished.length === 0;
  }

  public isEmptyListDelivered(): boolean {
    return this.listDelivered.length === 0;
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
  public post(service: Service): any {
    return this.http.post<Response>(this.url + 'service', JSON.stringify(service), httpOptions);
  }

  public delete(id: string): any {
    return this.http.delete<Response>(this.url + 'service/' + id, httpOptions);
  }

  public delServiceDeliver(id: string): any {
    return this.http.delete<Response>(this.url + 'service/deliver/' + id, httpOptions);
  }

  public delServiceFinish(id: string): any {
    return this.http.delete<Response>(this.url + 'service/finish/' + id, httpOptions);
  }

  public updService(id: string, service: Service): any {
    return this.http.put<Response>(this.url + 'service/' + id, JSON.stringify(Service), httpOptions);
  }

  public getService(id: string): any {
    return this.http.get<Response>(this.url + 'service/' + id);
  }

  public get(): any {
    return this.http.get<Response>(this.url + 'service', httpOptions);
  }
}
