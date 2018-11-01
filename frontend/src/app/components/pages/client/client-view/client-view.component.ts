import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  private index: number;

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

  constructor(private service: ClientService) { }

  ngOnInit() {
  }

  public getList(): any {
    return this.list;
  }

  public getIndex(value: any): void {
    this.index = this.list.indexOf(value);
  }

  public newClient(): void {
    this.service.newClient();
  }

  public delClient(): void {
    if (this.index !== -1) {
      this.list.splice(this.index, 1);
    }
  }

}
