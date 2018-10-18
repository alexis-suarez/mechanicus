import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private year: number;

  constructor(private auth: AuthService) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

  public getYear(): number {
    return this.year;
  }

  public getAuth(): AuthService {
    return this.auth;
  }
}
