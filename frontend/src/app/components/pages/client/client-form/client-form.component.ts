import { Component, OnInit } from '@angular/core';

// Models
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';

// Service
import { ClientService } from 'src/app/services/client.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  public client: Client;

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.clrModel();
  }

  public clrModel(): void {
    this.client = new Client();
    this.client.address = new Address();
  }

  public newClient(): void {
    this.service.addList(this.client);
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Correcto :D',
      showConfirmButton: false,
      timer: 1500
    });
    this.clrModel();
  }
}
