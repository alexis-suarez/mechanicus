import { Component, OnInit } from '@angular/core';

// Models
import { Employee } from 'src/app/models/employee';

// Service
import { EmployeeService } from 'src/app/services/employee.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  private list: Array<Employee>;
  private employee: Employee;
  private status: number;

  constructor(private service: EmployeeService) {
    this.list = new Array<Employee>();
  }

  ngOnInit() {
    if (this.service.isEmpty()) {
      // Load the data on the table
      this.viewEmployee();
    }

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

  // Get Status
  public getStatus(): number {
    return this.status;
  }

  // Set Status
  public setStatus(value: number): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.employee = new Employee();
  }

  // Search
  public search(value: string): void {
    if (value !== null) {
      console.log('entra');
      this.service.setList(this.filter(value));
    } else {
      console.log('fuera');
      this.service.setList(this.list);
    }
  }

  // Filter
  private filter(value: string): Array<Employee> {
    let list = new Array<Employee>();

    value = value.toLowerCase();

    for (let i = 0; i < this.service.getList().length; i++ ) {

      let data = this.service.getList()[i];
      let name = data.name.toLowerCase();

      if ( name.indexOf(value) >= 0) {
        list.push(data);
      }

    }

    return list;
  }

  // Function for CRUD
  public delEmployee(id: string, index: number): void {
    Swal({
      title: '¿Seguro de Borrar?',
      text: 'No se podrá recuperar despues',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(id).subscribe(response => {
          console.log(response);
          if (response.success) {
            this.service.delList(index);
          }
        }, error => {
          console.log(error);
        });
        Swal(
          '¡Borrado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  public getEmployee(id: string): void {
    this.service.get(id).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.employee = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public viewEmployee(): void {
    this.service.viewEmployee().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.service.setList(response.data);
        this.list = this.service.getList();
      }
    }, error => {
      console.log(error);
    });
  }
}
