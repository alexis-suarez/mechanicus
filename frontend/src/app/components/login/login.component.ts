import { Component, OnInit } from '@angular/core';

// Models
import { User } from 'src/app/models/user';

// Service
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(public auth: AuthService,
              private service: UserService) { }

  ngOnInit() {
    // Initialize Model
    this.clrModel();
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.user = new User();
  }

  public signIn(): void {
    this.service.chckUser(this.user.username, this.user.password).subscribe(response => {
      if (response.status) {
        this.auth.logint(response.data);
        const toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000
        });
        toast({
          type: 'success',
          title: 'Inicio de Session ¡Exitoso!'
        });
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: '¡Usuario o Contraseña Incorrecta...!',
        });
      }
    }, error => {
      console.log(error);
    });
    this.clrModel();
  }

  public signOut(): void {
    this.auth.logout();
  }

  public getAuth(): AuthService {
    return this.auth;
  }

}
