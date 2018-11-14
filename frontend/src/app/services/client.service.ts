import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../models/client';
import { Response } from '../models/response';

import { MessagesService } from './messages.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Client List
  private list: Array<Client>;

  // API URL
  private url = 'http://';

  constructor(private http: HttpClient) {
    this.list = [];
  }

  // Function for List
  public addList(client: Client): void {
    this.list.push(client);
  }

  public delList(index: number): void {
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  public getList(): any {
    return this.list;
  }

  public isEmpty(): boolean {
    return this.list.length !== 0;
  }

  // Http Request
  public newClient(client: Client): any {
    return this.http.post<Response>(this.url + '', httpOptions);
  }

  public delClient(id: string): any {
    return this.http.put<Response>(this.url + '', httpOptions);
  }

  public updClient(client: Client): any {
    return this.http.put<Response>(this.url + '', httpOptions);
  }

  public getClient(): any {
    return this.http.get<Response>(this.url + '', httpOptions);
  }

  public viwClient(): any {
    return this.http.get<Response>(this.url + '', httpOptions);
  }
}
