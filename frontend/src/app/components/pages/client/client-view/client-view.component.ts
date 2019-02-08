import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';

// Service
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
  private status: number;

  constructor(private service: ClientService, private route: Router) { }

  ngOnInit() {
    if (this.service.isEmpty()) {
      // Load the data on the table
      this.viewClient();
    }

    // Initialize Model
    this.clrModel();
  }

  // Return the list
  public getList(): Array<Client> {
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

  // Get Status
  public getStatus(): number {
    return this.status;
  }

  // Get Automobile
  public getAuto(id: string): void {
    this.route.navigate(['/client-view', id]);
  }

  // Set Status
  public setStatus(value: number): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.client = new Client();
    this.client.address = new Address();
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
          if (response.status) {
            this.service.delList(index);
          }
        }, error => {
          console.log(error);
        });
        swal(
          '¡Borrado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  public getClient(id: string): void {
    this.service.getClient(id).subscribe(response => {
      if (response.status) {
        this.client = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public viewClient(): void {
    this.service.viewClient().subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
