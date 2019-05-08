import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// API's
import { environment } from 'src/environments/environment';

// Models
import { Automobile } from '../models/automobile';
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
export class AutomobileService {

  // Client List
  private list: Array<Automobile>;
  private listBrand: Array<any>;

  // API URL
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.list = new Array<Automobile>();
    this.listBrand = [
      {'brand': 'Abarth'},
      {'brand': 'Alfa Romeo'},
      {'brand': 'Alpine'},
      {'brand': 'Aston Martin'},
      {'brand': 'Audi'},
      {'brand': 'Bentley'},
      {'brand': 'BMW'},
      {'brand': 'Bugatti'},
      {'brand': 'Citroën'},
      {'brand': 'CUPRA'},
      {'brand': 'Dacia'},
      {'brand': 'DS'},
      {'brand': 'Ferrari'},
      {'brand': 'Fiat'},
      {'brand': 'Ford'},
      {'brand': 'Honda'},
      {'brand': 'Hyundai'},
      {'brand': 'Infiniti'},
      {'brand': 'Jaguar'},
      {'brand': 'Jeep'},
      {'brand': 'KIA'},
      {'brand': 'Koenigsegg'},
      {'brand': 'Lamborghini'},
      {'brand': 'Land Rover'},
      {'brand': 'Lexus'},
      {'brand': 'Lotus'},
      {'brand': 'Maserati'},
      {'brand': 'Mazda'},
      {'brand': 'McLaren'},
      {'brand': 'Mercedes-Benz'},
      {'brand': 'MINI'},
      {'brand': 'Mitsubishi'},
      {'brand': 'Nissan'},
      {'brand': 'Opel'},
      {'brand': 'Pagani'},
      {'brand': 'Peugeot'},
      {'brand': 'Porsche'},
      {'brand': 'Renault'},
      {'brand': 'Rolls-Royce'},
      {'brand': 'SEAT'},
      {'brand': 'Skoda'},
      {'brand': 'Smart'},
      {'brand': 'SsangYong'},
      {'brand': 'Subaru'},
      {'brand': 'Suzuki'},
      {'brand': 'Tesla'},
      {'brand': 'Toyota'},
      {'brand': 'Volkswagen'},
      {'brand': 'Volvo'}
    ];
  }

  // Function for List
  public addList(automobile: Automobile): void {
    this.list.push(automobile);
  }

  public delList(index: number): void {
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  public setList(data: any): void {
    this.list = data;
  }

  public getList(): Array<Automobile> {
    return this.list;
  }

  public getBrand(): Array<string> {
    return this.listBrand;
  }

  public isEmpty(): boolean {
    return this.list.length === 0;
  }

  public setItemList(automobile: Automobile): void {
    let i = 0;
    while (i < this.list.length) {
      if (this.list[i].id === automobile.id) {
        this.list[i] = automobile;
      }
      i++;
    }
  }

  // Http Request
  public post(automobile: Automobile): any {
    return this.http.post<Response>(this.url + 'automobile', JSON.stringify(automobile), httpOptions);
  }

  public delete(id: string): any {
    return this.http.delete<Response>(this.url + 'automobile/' + id, httpOptions);
  }

  public put(id: string, automobile: Automobile): any {
    return this.http.put<Response>(this.url + 'automobile/' + id, JSON.stringify(automobile), httpOptions);
  }

  public getOne(id: string): any {
    return this.http.get<Response>(this.url + 'automobile/one/' + id, httpOptions);
  }

  public get(id: string): any {
    return this.http.get<Response>(this.url + 'automobile/' + id, httpOptions);
  }
}
