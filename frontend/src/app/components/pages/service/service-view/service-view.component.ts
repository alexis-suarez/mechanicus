import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {

  private list: any[];

  constructor() { }

  ngOnInit() {
  }

  public getList(): any {
    return this.list;
  }

  public newService(): void {
    //
  }

}
