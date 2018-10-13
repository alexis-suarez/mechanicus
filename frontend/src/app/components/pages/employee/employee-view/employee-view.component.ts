import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  private list: any[];

  constructor() { }

  ngOnInit() {
  }

  public getList(): any {
    return this.list;
  }

  public newEmployee(): void {
    //
  }

}
