import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Service } from 'src/app/models/service';
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';
import { Employee } from 'src/app/models/employee';
import { Automobile } from 'src/app/models/automobile';

// Service
import { ServiceService } from 'src/app/services/service.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private servic: Service;
  private status: boolean;

  constructor(private auth: AuthService,
              private service: ServiceService) { }

  ngOnInit() {
    // Load the data on the table
    this.viewService();

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
    this.servic.auto = new Automobile();
    this.servic.client = new Client();
    this.servic.client.address = new Address();
    this.servic.employee = new Employee();
    this.servic.employee.address = new Address();
  }

  // Function for CRUD
  public delService(id: string, index: number): void {
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
        this.service.delService(id).subscribe(response => {
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

  public getService(id: string): void {
    this.service.getService(id).subscribe(response => {
      this.servic = response.data;
    }, error => {
      console.log(error);
    });
  }

  public viewService(): void {
    this.service.viewService().subscribe(response => {
      this.service.setList(response.data);
    }, error => {
      console.log(error);
    });
  }
}
