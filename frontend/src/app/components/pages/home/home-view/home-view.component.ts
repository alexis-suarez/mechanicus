import { Component, OnInit } from '@angular/core';

import { Service } from 'src/app/models/service';
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';
import { Employee } from 'src/app/models/employee';
import { Automobile } from 'src/app/models/automobile';

// Service
import { AuthService } from 'src/app/services/auth.service';
import { ServiceService } from 'src/app/services/service.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  private servic: Service;
  private status: boolean;

  constructor(private auth: AuthService,
              private service: ServiceService) { }

  ngOnInit() {
    if (this.service.isEmpty()) {
      // Load the data on the table
      this.viewServicePending();
      this.viewServiceFinish();
    }

    // Initialize Model
    this.clrModel();
  }

  public getAuth(): AuthService {
    return this.auth;
  }

  // Return the list
  public getList(): Array<Service> {
    return this.service.getList();
  }

  // Check if is Empty
  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Get Model
  public getModel(): Service {
    return this.servic;
  }

  // Get Status
  public getStatus(): boolean {
    return this.status;
  }

  // Set Status
  public setStatus(value: boolean): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.servic = new Service();
  }

  // Function for CRUD
  public delService(id: string, index: number): void {
    swal({
      title: '¿Seguro de Cancelar?',
      text: 'No se podrá recuperar despues',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.delService(id).subscribe(response => {
          if (response.status) {
            this.service.delList(index);
          }
        }, error => {
          console.log(error);
        });
        swal(
          '¡Cancelado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  public delServiceFinish(id: string, index: number): void {
    swal({
      title: 'Finalizar Servicio',
      text: 'Quedará pendiente por Entregar',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Finalizar!'
    }).then((result) => {
      if (result.value) {
        this.service.delServiceFinish(id).subscribe(response => {
          if (response.status) {
            this.service.delList(index);
          }
        }, error => {
          console.log(error);
        });
        swal(
          'Finalizado!',
          '',
          'success'
        );
      }
    });
  }

  public getService(id: string): void {
    this.service.getService(id).subscribe(response => {
      if (response.success) {
        this.servic = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public viewServicePending(): void {
    this.service.viewServicePending().subscribe(response => {
      if (response.success) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }

  public viewServiceFinish(): void {
    this.service.viewServiceFinish().subscribe(response => {
      if (response.success) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
