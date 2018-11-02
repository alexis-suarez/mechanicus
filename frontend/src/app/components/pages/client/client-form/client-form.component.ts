import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  public client: Client;
  public address: Address;

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.clrModel();
  }

  public clrModel(): void {
    this.client = new Client();
    this.address = new Address();
  }

  public newClient(): void {
    this.client.address = this.address;
    this.service.addList(this.client);
    this.clrModel();
  }
}
