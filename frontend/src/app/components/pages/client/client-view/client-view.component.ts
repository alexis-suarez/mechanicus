import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private service: ClientService,
              private message: MessagesService) { }

  ngOnInit() {
  }

  public getList(): any {
    return this.service.getList();
  }

  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Function for CRUD
  public delClient(id: string, index: number): void {
    this.service.delList(index);
  }

  public updClient(id: string): void {
    //
  }

  public getClient(): void {
    //
  }

  public vieClient(): void {
    //
  }
}
