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
import swal from 'sweetalert2';
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

  private client = new Client();

  constructor(private serServ: ServiceService,
              private cliServ: ClientService,
              private empServ: EmployeeService,
              private autServ: AutomobileService) { }

  ngOnInit() {
    // Initialize Model
    this.clrModel();
    this.viewClient();
    this.viewEmployee();
  }

  // Return the list of clients
  public getListCli(): Array<Client> {
    return this.cliServ.getList();
  }

  public getListAut(): Array<Automobile> {
    return this.autServ.getList();
  }

  // Return the list of employees
  public getListEmp(): Array<Employee> {
    return this.empServ.getList();
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.servic = new Service();
  }

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  private getClient(id: string): void {
    this.cliServ.getClient(id).subscribe(response => {
      this.client = response.data;
    }, error => {
      console.log(error);
    });
  }

  // Function for CRUD
  public newService(): void {
    const data = this.servic;
    this.serServ.post(this.servic).subscribe(response => {
      console.log(response);
      if (response.status) {
        this.serServ.addList(data);
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Correcto :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
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
    this.closeModal();
  }

  public updService(id: string): void {
    const data = this.servic;
    this.serServ.updService(this.servic.id, this.servic).subscribe(response => {
      if (response.status) {
        this.serServ.setItemList(data);
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Actualizado :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
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
    this.closeModal();
  }

  public viewClient(): void {
    this.cliServ.viewClient().subscribe(response => {
      this.cliServ.setList(response.data);
    }, error => {
      console.log(error);
    });
  }

  public viewEmployee(): void {
    this.empServ.viewEmployee().subscribe(response => {
      this.empServ.setList(response.data);
    }, error => {
      console.log(error);
    });
  }
}
