import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';

// DataTables
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

// Models
import { Service } from 'src/app/models/service';

// Services
import { ServiceService } from 'src/app/services/service.service';
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements AfterViewInit, OnDestroy, OnInit {

  // Datatables
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  private servic: Service;
  private status: number;

  constructor(private service: ServiceService,
    private auto: AutomobileService) { }

  ngOnInit() {
    // Load the data on the table
    this.get();
    // Initialize Model
    this.initializer();

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
  public getList(): Array<Service> {
    return this.service.getListDelivered();
  }

  // Check if is Empty
  public isEmptyListDelivered(): boolean {
    return this.service.isEmptyListDelivered();
  }

  // Get Model
  public getModel(): Service {
    return this.servic;
  }

  // Get Status
  public getStatus(): number {
    return this.status;
  }

  // Set Status
  public setStatus(value: number): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public initializer(): void {
    this.servic = new Service();
  }

  // Function for CRUD
  public delete(id: string, index: number): void {
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
        this.service.delete(id).subscribe(response => {
          console.log(response);
          if (response.status) {
            this.get();
          }
        }, error => {
          console.log(error);
        });
        swal(
          '¡Borrado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  public getOne(id: string): void {
    this.service.getOne(id).subscribe(response => {
      if (response.status) {
        this.servic = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public get(): void {
    this.auto.getAll().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.auto.setList(response.data.filter(item => {
          return item.status === true;
        }));
      }
    }, error => {
      console.log(error);
    });
    this.service.get().subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }

  public getAuto(id: string): string {
    return this.auto.getName(id);
  }
}
