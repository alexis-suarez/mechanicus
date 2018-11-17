import { Component, OnInit } from '@angular/core';

// Models
import { Client } from 'src/app/models/client';

// Services
import { ClientService } from 'src/app/services/client.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.viewClient();
  }

  public getList(): any {
    return this.service.getList();
  }

  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Function for CRUD
  public delClient(id: string, index: number): void {
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
        this.service.delList(index);
      }
    });
  }

  public updClient(id: string): void {
    //
  }

  public getClient(): void {
    //
  }

  public viewClient(): void {
    this.service.viewClient().subscribe(response => {
      this.service.setList(response.data);
    }, error => {
      console.log(error);
    });
  }
}
