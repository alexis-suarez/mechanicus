import { Component, OnInit, Input } from '@angular/core';

// Models
import { User } from 'src/app/models/user';

// Service
import { UserService } from 'src/app/services/user.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

// Variables for jQuery
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Input() status: boolean;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.clrModel();
  }

  public clrModel(): void {
    this.user = new User();
  }

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  public newUser(): void {
    const data = this.user;
    this.service.newUser(this.user).subscribe(response => {
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
    this.closeModal();
  }

  public updUser(id: string): void {
    const data = this.user;
    this.service.updUser(this.user.id, this.user).subscribe(response => {
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
