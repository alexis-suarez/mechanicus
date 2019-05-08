import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// API's
import { environment } from 'src/environments/environment';

// Models
import { Client } from '../models/client';
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
export class ClientService {

  // Client List
  private list: Array<Client>;

  // API URL
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.list = new Array<Client>();
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

  public remove(index: number): void {
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
  public post(client: Client): any {
    return this.http.post<Response>(this.url + 'client', JSON.stringify(client), httpOptions);
  }

  public delete(id: string): any {
    return this.http.delete<Response>(this.url + 'client/' + id, httpOptions);
  }

  public put(id: string, client: Client): any {
    return this.http.put<Response>(this.url + 'client/' + id, JSON.stringify(client), httpOptions);
  }

  public getOne(id: string): any {
    return this.http.get<Response>(this.url + 'client/' + id, httpOptions);
  }

  public get(): any {
    return this.http.get<Response>(this.url + 'client', httpOptions);
  }
}
