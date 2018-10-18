import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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
  }

  public signOut(): void {
    this.auth.logout();
  }

  public getAuth(): AuthService {
    return this.auth;
  }

}
