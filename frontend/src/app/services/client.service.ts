import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private message: MessagesService) { }

  public newClient(): void {
    this.message.alert(true, 1);
  }
}
