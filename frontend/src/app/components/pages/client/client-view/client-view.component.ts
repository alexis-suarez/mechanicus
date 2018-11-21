import { Component, OnInit } from '@angular/core';

// Models
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';

// Services
import { ClientService } from 'src/app/services/client.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  private client: Client;

  constructor(private service: ClientService) { }

  ngOnInit() {
    // Load the data on the table
    this.viewClient();
    // Initialize Model
    this.client = new Client();
  }

  // Return the list
  public getList(): any {
    return this.service.getList();
  }

  // Check if is Empty
  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Get Model
  public getModel(): Client {
    return this.client;
  }

  public clrModel(): void {
    this.client = new Client();
    this.client.address = new Address();
  }

  // Function for CRUD
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

  public delClient(id: string, index: number): void {
    swal({
      title: '¿Seguro de Borrar?',
      text: 'No se podrá recuperar despues',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.delClient(id).subscribe(response => {
          console.log(response);
          if (response.status) {
            this.service.delList(index);
          }
        }, error => {
          console.log(error);
        });
        swal(
          '¡Error!',
          'Algo Salio Mal :(.',
          'error'
        );
      }
    });
  }

  public updClient(id: string): void {
    //
  }

  public getClient(id: string): void {
    this.service.getClient(id).subscribe(response => {
      console.log(response.data);
      this.client = response.data;
    }, error => {
      console.log(error);
    });
  }

  public viewClient(): void {
    this.service.viewClient().subscribe(response => {
      this.service.setList(response.data);
    }, error => {
      console.log(error);
    });
  }
}
