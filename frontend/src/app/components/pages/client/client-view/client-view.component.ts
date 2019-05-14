import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// DataTables
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

// Models
import { Client } from 'src/app/models/client';

// Service
import { ClientService } from 'src/app/services/client.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements AfterViewInit, OnDestroy, OnInit {

  // Datatables
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  private client: Client;
  private status: number;

  constructor(private service: ClientService, private route: Router) { }

  ngOnInit() {
    if (this.service.isEmpty()) {
      // Load the data on the table
      this.viewClient();
    }

    // Initialize Model
    this.clrModel();

    this.dtOptions = {
      dom: '<\'row mt-4\'<\'col-sm-12 col-md-6\'lB><\'col-sm-12 col-md-6\'f>>' +
      '<\'row\'<\'table-responsive\'<\'col-sm-12\'tr>>>' +
      '<\'row\'<\'col-sm-12 col-md-5\'i><\'col-sm-12 col-md-7\'p>>',
      pagingType: 'full_numbers'
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  // Return the list
  public getList(): Array<Client> {
    return this.service.getList();
  }

  // Check if is Empty
  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Get Model
  public getModel(): Client {
    return this.client;
  }

  // Get Status
  public getStatus(): number {
    return this.status;
  }

  // Get Automobile
  public getAuto(id: string): void {
    this.route.navigate(['/client-view', id]);
  }

  // Set Status
  public setStatus(value: number): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.client = new Client();
  }

  // Function for CRUD
  public delClient(id: string, index: number): void {
    Swal({
      title: '¿Seguro de Borrar?',
      text: 'No se podrá recuperar despues',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(id).subscribe(response => {
          console.log(response);
          if (response.success) {
            this.service.remove(index);
          }
        }, error => {
          console.log(error);
        });
        Swal(
          '¡Borrado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  public getClient(id: string): void {
    this.service.getOne(id).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.client = response.data;
        this.rerender();
      }
    }, error => {
      console.log(error);
    });
  }

  private viewClient(): void {
    this.service.get().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.service.setList(response.data);
        this.rerender();
      }
    }, error => {
      console.log(error);
    });
  }
}
