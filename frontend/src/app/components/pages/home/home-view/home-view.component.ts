import { Component, OnInit } from '@angular/core';

import { Service } from 'src/app/models/service';

// Service
import { AuthService } from 'src/app/services/auth.service';
import { ServiceService } from 'src/app/services/service.service';
import { ClientService } from 'src/app/services/client.service';
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  private servic: Service;
  private status: boolean;

  constructor(private auth: AuthService,
    private auto: AutomobileService,
    private client: ClientService,
    private service: ServiceService) { }

  ngOnInit() {
    if (this.service.isEmpty()) {
      // Load the data on the table
      this.get();
    }

    // Initialize Model
    this.clrModel();
  }

  public getAuth(): AuthService {
    return this.auth;
  }

  // Return the list
  public getListPending(): Array<Service> {
    return this.service.getListPending();
  }

  public getListFinished(): Array<Service> {
    return this.service.getListFinished();
  }

  // Check if is Empty
  public isEmptyListPending(): boolean {
    return this.service.isEmptyListPending();
  }

  public isEmptyListFinished(): boolean {
    return this.service.isEmptyListFinished();
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
    Swal({
      title: '¿Seguro de Cancelar?',
      text: 'No se podrá recuperar despues',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(id).subscribe(response => {
          if (response.status) {
            this.service.delList(index);
          }
        }, error => {
          console.log(error);
        });
        Swal(
          '¡Cancelado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  public delServiceFinish(id: string, index: number): void {
    Swal({
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
        Swal(
          'Finalizado!',
          '',
          'success'
        );
      }
    });
  }

  public getService(id: string): void {
    this.service.getService(id).subscribe(response => {
      if (response.status) {
        this.servic = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public get(): void {
    this.client.get().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.client.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
    this.auto.getAll().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.auto.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
    this.service.get().subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }

  public getClient(id: string): string {
    return this.client.getName(id);
  }

  public getAuto(id: string): string {
    return this.auto.getName(id);
  }
}
