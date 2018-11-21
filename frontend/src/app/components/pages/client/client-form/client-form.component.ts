import { Component, OnInit, Input } from '@angular/core';

// Models
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
    this.clrModel();
  }

  public clrModel(): void {
    this.client = new Client();
    this.client.address = new Address();
  }
}
