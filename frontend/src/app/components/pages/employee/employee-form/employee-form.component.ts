import { Component, OnInit, Input } from '@angular/core';

// Models
import { Employee } from 'src/app/models/employee';
import { Address } from 'src/app/models/address';

// Service
import { EmployeeService } from 'src/app/services/employee.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() employee: Employee;
  @Input() status: boolean;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    // Initialize Model
    this.clrModel();
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.employee = new Employee();
    this.employee.address = new Address();
  }

  // Function for CRUD
  public newEmployee(): void {
    const data = this.employee;
    this.service.newEmployee(this.employee).subscribe(response => {
      console.log(response);
      this.service.addList(data);
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
  }

  public updEmployee(id: string): void {
    //
  }
}
