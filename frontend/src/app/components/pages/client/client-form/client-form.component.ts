import { Component, OnInit, Input } from '@angular/core';

// Models
import { Client } from 'src/app/models/client';

// Service
import { ClientService } from 'src/app/services/client.service';
import { AddressService } from 'src/app/services/address.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

// Variables for jQuery
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Input() client: Client;
  @Input() status: number;

  constructor(private service: ClientService,
    private state: AddressService) { }

  ngOnInit() {
    this.clrModel();
  }

  public clrModel(): void {
    this.client = new Client();
  }

  public getState(): Array<string> {
    return this.state.getList();
  }

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  public newClient(): void {
    const data = this.client;
    this.service.post(this.client).subscribe(response => {
      if (response.success) {
        this.service.insert(data);
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Correcto :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, error => {
      console.log(error);
      Swal({
        position: 'top-end',
        type: 'error',
        title: 'Error :(',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.clrModel();
    this.closeModal();
    this.viewClient();
  }

  public updClient(id: string): void {
    const data = this.client;
    this.service.put(id, this.client).subscribe(response => {
      if (response.success) {
        this.service.setItemList(data);
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Actualizado :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, error => {
      console.log(error);
      Swal({
        position: 'top-end',
        type: 'error',
        title: 'Error :(',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.clrModel();
    this.closeModal();
    this.viewClient();
  }

  private viewClient(): void {
    this.service.get().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
