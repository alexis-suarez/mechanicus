import { Injectable } from '@angular/core';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  public add(status: boolean, type: number): void {
    if (status !== false) {
      switch (type) {
        case 1: // Success
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Correcto :D',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 2: // Error
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Error :(',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 3: // Warning
          swal({
            position: 'top-end',
            type: 'warning',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 4: // Info
          swal({
            position: 'top-end',
            type: 'info',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 5: // Question
          swal({
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
      swal({
        // position: 'top-end',
        type: 'error',
        title: 'Algo no esta bien :S',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  public del(): void {
    swal({
      title: '¿Seguro de Borrar?',
      text: 'No se podrá recuperar despues',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Eliminar!'
    }).then((result) => {
      if (result.value) {
        swal(
          '¡Borrado!',
          'Se ha eliminado la información.',
          'success'
        );
      }
    });
  }
}
