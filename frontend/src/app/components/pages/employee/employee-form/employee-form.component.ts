import { Component, OnInit, Input, } from '@angular/core';

// Models
import { Employee } from 'src/app/models/employee';

// Service
import { EmployeeService } from 'src/app/services/employee.service';
import { AddressService } from 'src/app/services/address.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

// Variables for jQuery
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() employee: Employee;
  @Input() status: number;


  constructor(private service: EmployeeService,
    private state: AddressService) {
    }

  ngOnInit() {
    // Initialize Model
    this.initializer();
  }

  // Clear and Initialize Model
  public initializer(): void {
    this.employee = new Employee();
  }

  public getState(): Array<string> {
    return this.state.getList();
  }

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  // Function for CRUD
  public post(): void {
    this.service.post(this.employee).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.get();
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
    this.service.put(id, this.employee).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.get();
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

  public get(): void {
    this.service.get().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
