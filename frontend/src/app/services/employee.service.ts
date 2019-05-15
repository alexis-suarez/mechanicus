import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// API's
import { environment } from 'src/environments/environment';

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
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.list = new Array<Employee>();
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
    return this.list.length === 0;
  }

  public setItemList(employee: Employee): void {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i].id === employee.id) {
        this.list[i] = employee;
      }
      i++;
    }
  }

  // Http Request
  public post(employee: Employee): any {
    return this.http.post<Response>(this.url + 'employee', JSON.stringify(employee), httpOptions);
  }

  public delete(id: string): any {
    return this.http.delete<Response>(this.url + 'employee/' + id, httpOptions);
  }

  public put(id: string, employee: Employee): any {
    return this.http.put<Response>(this.url + 'employee/' + id, JSON.stringify(employee), httpOptions);
  }

  public getOne(id: string): any {
    return this.http.get<Response>(this.url + 'employee/' + id);
  }

  public get(): any {
    return this.http.get<Response>(this.url + 'employee', httpOptions);
  }
}
