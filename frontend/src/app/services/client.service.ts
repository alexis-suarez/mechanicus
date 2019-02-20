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
  // private url = 'http://argentum.sytes.net:5000/api/client';

  constructor(private http: HttpClient) {
    this.list = [];
  }

  // Function for List

  public isEmpty(): boolean {
    return this.list.length === 0;
  }

  public contrains(data: Client): boolean {
    if (!this.isEmpty()) {
      this.list.forEach(element => {
        if (element.id === data.id) { return true; }
      });
    }
    return false;
  }

  public insert(data: Client): void {
    this.list.push(data);
  }

  public delete(index: number): void {
    if (index !== -1 && !this.isEmpty()) {
      this.list.splice(index, 1);
    }
  }

  public clear(): void {
    this.list = new Array<Client>();
  }

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<Client> {
    return this.list;
  }

  public find(id: string): number {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i].id === id) { return i; }
      i += 1;
    }
    return -1;
  }

  public retrive(index: number): Client {
    if (index !== -1 && !this.isEmpty()) {
      return this.list[index];
    }
  }

  public setItemList(data: Client): void {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i].id === data.id) {
        this.list[i] = data;
      }
      i++;
    }
  }

  // Http Request
  public newClient(client: Client): any {
    return this.http.post<Response>(this.url, JSON.stringify(client), httpOptions);
  }

  public delClient(id: string): any {
    return this.http.delete<Response>(this.url + '/' + id, httpOptions);
  }

  public updClient(id: string, client: Client): any {
    return this.http.put<Response>(this.url + '/' + id, JSON.stringify(client), httpOptions);
  }

  public getClient(id: string): any {
    return this.http.get<Response>(this.url + '/' + id, httpOptions);
  }

  public viewClient(): any {
    return this.http.get<Response>(this.url, httpOptions);
  }
}
