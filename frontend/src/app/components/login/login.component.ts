import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  public signIn(): void {
    this.auth.logint();
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
  }

  public signOut(): void {
    this.auth.logout();
  }

  public getAuth(): AuthService {
    return this.auth;
  }

}
