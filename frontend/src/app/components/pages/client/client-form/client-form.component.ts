import { Component, OnInit, Input } from '@angular/core';

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

  @Input() client: Client;
  @Input() status: boolean;

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.clrModel();
    this.status = true;
  }

  public clrModel(): void {
    this.client = new Client();
    this.client.address = new Address();
  }

  public newClient(): void {
    const data = this.client;
    this.service.newClient(this.client).subscribe(response => {
      console.log(response);
      this.service.addList(data);
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Correcto :D',
        showConfirmButton: false,
        timer: 1500
      });
    }, error => {
      console.log(error);
      swal({
        position: 'top-end',
        type: 'error',
        title: 'Error :(',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.clrModel();
  }

  public updClient(id: string): void {
    //
  }
}
