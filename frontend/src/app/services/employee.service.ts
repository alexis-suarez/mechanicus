import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { Employee } from '../models/employee';
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
export class EmployeeService {

  // Employee List
  private list: Array<Employee>;

  // API URL
  private url = 'http://127.0.0.1:5000/api/employee';

  constructor(private http: HttpClient) {
    this.list = [];
  }

  // Function for List
  public addList(employee: Employee): void {
    this.list.push(employee);
  }

  public delList(index: number): void {
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<Employee> {
    return this.list;
  }

  public isEmpty(): boolean {
    return this.list.length !== 0;
  }

  // Http Request
  public newEmployee(employee: Employee): any {
    return this.http.post<Response>(this.url, JSON.stringify(employee), httpOptions);
  }

  public delEmployee(id: string): any {
    return this.http.delete<Response>(this.url + '/' + id, httpOptions);
  }

  public updEmployee(employee: Employee): any {
    return this.http.put<Response>(this.url, httpOptions);
  }

  public getEmployee(id: string): any {
    return this.http.get<Response>(this.url + '/' + id);
  }

  public viewEmployee(): any {
    return this.http.get<Response>(this.url, httpOptions);
  }
}
