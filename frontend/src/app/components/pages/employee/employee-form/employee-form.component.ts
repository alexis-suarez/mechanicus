import { Component, OnInit, Input } from '@angular/core';

// Models
import { Employee } from 'src/app/models/employee';
import { Address } from 'src/app/models/address';

// Service
import { EmployeeService } from 'src/app/services/employee.service';
import { AddressService } from 'src/app/services/address.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

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
    private state: AddressService) { }

  ngOnInit() {
    // Initialize Model
    this.clrModel();
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.employee = new Employee();
    // this.employee.address = new Address();
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
  public newEmployee(): void {
    const data = this.employee;
    this.service.post(this.employee).subscribe(response => {
      if (response.status) {
        this.service.addList(data);
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

  public updEmployee(id: string): void {
    const data = this.employee;
    this.service.put(this.employee.id, this.employee).subscribe(response => {
      if (response.status) {
        this.service.setItemList(data);
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
