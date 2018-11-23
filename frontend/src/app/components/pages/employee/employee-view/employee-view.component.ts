import { Component, OnInit } from '@angular/core';

// Models
import { Employee } from 'src/app/models/employee';
import { Address } from 'src/app/models/address';

// Service
import { EmployeeService } from 'src/app/services/employee.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  private employee: Employee;
  public form: any;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    // Load the data on the table
    this.viewEmployee();

    // Initialize Model
    this.clrModel();
  }

  // Return the list
  public getList(): Array<Employee> {
    return this.service.getList();
  }

  // Check if is Empty
  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Get Model
  public getModel(): Employee {
    return this.employee;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.employee = new Employee();
    this.employee.address = new Address();
  }

  // Set Form Status
  public setForm(value): void {
    this.form = value;
  }

  // Function for CRUD
  public delEmployee(id: string, index: number): void {
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
        this.service.delEmployee(id).subscribe(response => {
          console.log(response);
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

  public updEmployee(id: string): void {
    //
  }

  public getEmployee(id: string): void {
    this.service.getEmployee(id).subscribe(response => {
      console.log(response.data);
      this.employee = response.data;
    }, error => {
      console.log(error);
    });
  }

  public viewEmployee(): void {
    this.service.viewEmployee().subscribe(response => {
      console.log(response);
      this.service.setList(response.data);
    }, error => {
      console.log(error);
    });
  }
}
