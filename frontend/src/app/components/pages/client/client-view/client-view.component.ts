import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  private list: any[] = [
    {
      name: 'Alexis Suárez Llamas',
      rfc: 'SULA950925',
      phone: '3171027849',
      email: 'alexis.suarez@ejemplo.com'
    },
    {
      name: 'Armando Suárez Avalos',
      rfc: 'SULA950925',
      phone: '3814830',
      email: 'armando.suarez@ejemplo.com'
    },
    {
      name: 'Alan Suárez Llamas',
      rfc: 'SULA950925',
      phone: '',
      email: 'alan.suarez@ejemplo.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public getList(): any {
    return this.list;
  }

  public newClient(): void {
    
  }

}
