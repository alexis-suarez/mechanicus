import { Component, OnInit, Input } from '@angular/core';

// Models
import { Service } from 'src/app/models/service';
import { Client } from 'src/app/models/client';
import { Address } from 'src/app/models/address';
import { Employee } from 'src/app/models/employee';
import { Automobile } from 'src/app/models/automobile';

// Services
import { ClientService } from 'src/app/services/client.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AutomobileService } from 'src/app/services/automobile.service';
import { ServiceService } from 'src/app/services/service.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

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

  constructor(private serServ: ServiceService,
              private cliServ: ClientService,
              private empServ: EmployeeService,
              private autServ: AutomobileService) { }

  ngOnInit() {
    // Initialize Model
    this.clrModel();
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

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  // Function for CRUD
  public newService(): void {
    const data = this.servic;
    this.serServ.newService(this.servic).subscribe(response => {
      console.log(response);
      this.serServ.addList(data);
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
}
