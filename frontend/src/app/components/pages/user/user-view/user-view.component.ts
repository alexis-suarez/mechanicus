import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';

// DataTables
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

// Models
import { User } from 'src/app/models/user';

// Service
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements AfterViewInit, OnDestroy, OnInit {

  // Datatables
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  private user: User;
  private status: boolean;

  constructor(private service: UserService,
    private auth: AuthService) { }

  ngOnInit() {
    // Initialize Model
    this.initializer();

    this.dtOptions = {
      dom: '<\'row mt-4\'<\'col-sm-12 col-md-6\'lB><\'col-sm-12 col-md-6\'f>>' +
      '<\'row\'<\'table-responsive\'<\'col-sm-12\'tr>>>' +
      '<\'row\'<\'col-sm-12 col-md-5\'i><\'col-sm-12 col-md-7\'p>>',
      pagingType: 'full_numbers'
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  // Return the list
  public getList(): Array<User> {
    return this.service.getList();
  }

  // Check if is Empty
  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Get Model
  public getModel(): User {
    return this.user;
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
  public initializer(): void {
    this.user = new User();
    this.get();
  }

  // Function for CRUD
  public delete(id: string, index: number): void {
    if (id !== this.auth.getId()) {
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
            if (response.status) {
              this.get();
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
    } else {
      Swal({
        position: 'top-end',
        type: 'error',
        title: 'Error, Estas Logueado con este Usuario :(',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  public getOne(id: string): void {
    this.service.getOne(id).subscribe(response => {
      if (response.status) {
        this.user = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public get(): void {
    this.service.get().subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
