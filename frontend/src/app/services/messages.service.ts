import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  public alert(status: boolean, type: number): void {
    if (status !== false) {
      switch (type) {
        case 1: // Success
          Swal({
            position: 'top-end',
            type: 'success',
            title: 'Correcto :D',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 2: // Error
          Swal({
            position: 'top-end',
            type: 'error',
            title: 'Error :(',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 3: // Warning
          Swal({
            position: 'top-end',
            type: 'warning',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 4: // Info
          Swal({
            position: 'top-end',
            type: 'info',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 5: // Question
          Swal({
            position: 'top-end',
            type: 'question',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        default:
          break;
      }
    } else {
      Swal({
        // position: 'top-end',
        type: 'error',
        title: 'Algo no esta bien :S',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
