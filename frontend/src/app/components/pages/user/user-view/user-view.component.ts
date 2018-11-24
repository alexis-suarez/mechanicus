import { Component, OnInit } from '@angular/core';

// Models
import { User } from 'src/app/models/user';

// Service
import { UserService } from 'src/app/services/user.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private user: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    // Load the data on the table
    this.viewUser();

    // Initialize Model
    this.clrModel();
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

  // Clear and Initialize Model
  public clrModel(): void {
    this.user = new User();
  }

  // Function for CRUD
  public delUser(id: string, index: number): void {
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
        this.service.delUser(id).subscribe(response => {
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

  public updUser(id: string): void {
    //
  }

  public getUser(id: string): void {
    this.service.getUser(id).subscribe(response => {
      console.log(response.data);
      this.user = response.data;
    }, error => {
      console.log(error);
    });
  }

  public viewUser(): void {
    this.service.viewUser().subscribe(response => {
      console.log(response);
      this.service.setList(response.data);
    }, error => {
      console.log(error);
    });
  }
}
