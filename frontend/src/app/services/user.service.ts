import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private url = 'http://127.0.0.1:5000/api/user';
  // private url = 'http://argentum.sytes.net:5000/api/user';

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
  public newUser(user: User): any {
    return this.http.post<Response>(this.url, JSON.stringify(user), httpOptions);
  }

  public delUser(id: string): any {
    return this.http.delete<Response>(this.url + '/' + id, httpOptions);
  }

  public updUser(id: string, user: User): any {
    return this.http.put<Response>(this.url + '/' + id, JSON.stringify(user), httpOptions);
  }

  public getUser(id: string): any {
    return this.http.get<Response>(this.url + '/' + id);
  }

  public viewUser(): any {
    return this.http.get<Response>(this.url, httpOptions);
  }

  public chckUser(username: string, password: string): any {
    return this.http.get<Response>(this.url + '/chck/' + username + '/' + password, httpOptions);
  }
}
