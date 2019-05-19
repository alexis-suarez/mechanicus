import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// API's
import { environment } from 'src/environments/environment';

// Models
import { User } from '../models/user';
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
export class UserService {

  // Client List
  private list: Array<User>;

  // API URL
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.list = [];
  }

  // Function for List
  public addList(user: User): void {
    this.list.push(user);
  }

  public delList(index: number): void {
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<User> {
    return this.list;
  }

  public isEmpty(): boolean {
    return this.list.length === 0;
  }

  public contrains(value: string): boolean {
    if (!this.isEmpty()) {
      this.list.forEach(element => {
        if (element.id === value) { return true; }
      });
    }
    return false;
  }

  public setItemList(user: User): void {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i].id === user.id) {
        this.list[i] = user;
      }
      i++;
    }
  }

  // Http Request
  public post(user: User): any {
    return this.http.post<Response>(this.url + 'user', JSON.stringify(user), httpOptions);
  }

  public delete(id: string): any {
    return this.http.delete<Response>(this.url + 'user/' + id, httpOptions);
  }

  public put(id: string, user: User): any {
    return this.http.put<Response>(this.url + 'user/' + id, JSON.stringify(user), httpOptions);
  }

  public getOne(id: string): any {
    return this.http.get<Response>(this.url + 'user/' + id);
  }

  public get(): any {
    return this.http.get<Response>(this.url + 'user', httpOptions);
  }

  public chckUser(username: string, password: string): any {
    return this.http.get<Response>(this.url + 'user/chck/' + username + '/' + password, httpOptions);
  }
}
