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
  private status: number;

  constructor(private auto: AutomobileService,
    private client: ClientService,
    private service: ServiceService) { }

  ngOnInit() {
    // Load the data on the table
    this.get();
    // Initialize Model
    this.initializer();
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
  public getStatus(): number {
    return this.status;
  }

  // Set Status
  public setStatus(value: number): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public initializer(): void {
    this.servic = new Service();
  }

  // Function for CRUD
  public delete(id: string, index: number): void {
    Swal({
      title: '¿Seguro de Cancelar?',
      text: 'No se podrá recuperar después',
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
            this.get();
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

  public finish(id: string, index: number): void {
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
        this.service.finish(id).subscribe(response => {
          if (response.status) {
            this.get();
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

  public deliver(id: string, index: number): void {
    Swal({
      title: 'Entregar Servicio',
      text: 'Pasará a lista de Terminados',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Finalizar!'
    }).then((result) => {
      if (result.value) {
        this.service.deliver(id).subscribe(response => {
          if (response.status) {
            this.get();
          }
        }, error => {
          console.log(error);
        });
        Swal(
          'Entregado!',
          '',
          'success'
        );
      }
    });
  }

  public getService(id: string): void {
    this.service.getOne(id).subscribe(response => {
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
        this.client.setList(response.data.filter(item => {
          return item.status === true;
        }));
      }
    }, error => {
      console.log(error);
    });
    this.auto.getAll().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.auto.setList(response.data.filter(item => {
          return item.status === true;
        }));
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
