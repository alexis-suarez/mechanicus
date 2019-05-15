import { Component, OnInit, Input } from '@angular/core';

// Models
import { Service } from 'src/app/models/service';
import { Client } from 'src/app/models/client';
import { Employee } from 'src/app/models/employee';

// Services
import { ClientService } from 'src/app/services/client.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AutomobileService } from 'src/app/services/automobile.service';
import { ServiceService } from 'src/app/services/service.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';
import { Automobile } from 'src/app/models/automobile';

// Variables for jQuery
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  @Input() servic: Service;
  @Input() status: boolean;

  private object = new Client();

  constructor(private serServ: ServiceService,
    private auto: AutomobileService,
    private client: ClientService,
    private empServ: EmployeeService) { }

  ngOnInit() {
    // Initialize Model
    this.initializer();
  }

  // Return the list of clients
  public getListCli(): Array<Client> {
    return this.client.getList();
  }

  public getListAut(): Array<Automobile> {
    return this.auto.getList();
  }

  // Return the list of employees
  public getListEmp(): Array<Employee> {
    return this.empServ.getList();
  }

  // Clear and Initialize Model
  public initializer(): void {
    this.servic = new Service();
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
  }

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  public onChange(value: string): void {
    this.auto.setList([]);
    this.getAutomobile(value);
  }

  // Function for CRUD
  public post(): void {
    const data = this.servic;
    this.serServ.post(this.servic).subscribe(response => {
      console.log(response);
      if (response.status) {
        this.serServ.addList(data);
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
    this.initializer();
    this.closeModal();
  }

  public put(id: string): void {
    const data = this.servic;
    this.serServ.put(this.servic.id, this.servic).subscribe(response => {
      if (response.status) {
        this.serServ.setItemList(data);
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
    this.initializer();
    this.closeModal();
  }

  public getAutomobile(id: string): void {
    this.auto.get(id).subscribe(response => {
      if (response.success) {
        this.auto.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
