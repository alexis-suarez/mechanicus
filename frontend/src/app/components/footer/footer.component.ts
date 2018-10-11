import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

  public getYear(): number {
    return this.year;
  }

}
