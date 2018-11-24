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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public signOut(): void {
    this.auth.logout();
  }

  public getAuth(): AuthService {
    return this.auth;
  }
}
