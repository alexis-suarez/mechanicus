import { Component, OnInit } from '@angular/core';

// Models
import { Client } from 'src/app/models/client';

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

  // Function for CRUD
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
