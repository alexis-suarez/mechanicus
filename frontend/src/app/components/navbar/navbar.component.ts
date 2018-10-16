import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

// Variables for jQuery
declare var $: any;
declare var $jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) {
    // auth.handleAuthentication();
  }

  ngOnInit() {
    // if (this.auth.userProfile) {
    //   this.profile = this.auth.userProfile;
    // } else {
    //   this.auth.getProfile((err, profile) => {
    //     this.profile = profile;
    //   });
    // }
  }

  public signIn(): void {
    //
  }

  public signOut(): void {
    //
  }

  public getAuth(): AuthService {
    return this.auth;
  }

  public singOut(): void {
    this.auth.logout();
  }
}
