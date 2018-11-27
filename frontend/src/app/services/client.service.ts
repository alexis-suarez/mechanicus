import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { Client } from '../models/client';
import { Address } from '../models/address';
import { Response } from '../models/response';

// Header Options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    // 'Authorization': 'my-auth-token'
  })
};

export interface ClientInterface {
  id: string;
  name: string;
  address: Address;
  auto: string[];
  rfc: string;
  phone: string;
  email: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Client List
  private list: Array<Client>;

  // API URL
  private url = 'http://127.0.0.1:5000/api/client';

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

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<Client> {
    return this.list;
  }

  public isEmpty(): boolean {
    return this.list.length !== 0;
  }

  public search(value: string): Array<Client> {
    let filterList: Array<Client> = [];
    value = value.toLowerCase();

    this.list.forEach(element => {
      if (element.name.indexOf(value) >= 0) {
        filterList.push(element);
      }
    });
    return filterList;
  }

  // Http Request
  public newClient(client: Client): any {
    return this.http.post<Response>(this.url, JSON.stringify(client), httpOptions);
  }

  public delClient(id: string): any {
    return this.http.delete<Response>(this.url + '/' + id, httpOptions);
  }

  public updClient(client: Client): any {
    return this.http.put<Response>(this.url, httpOptions);
  }

  public getClient(id: string): any {
    return this.http.get<Response>(this.url + '/' + id);
  }

  public viewClient(): any {
    return this.http.get<Response>(this.url, httpOptions);
  }
}
