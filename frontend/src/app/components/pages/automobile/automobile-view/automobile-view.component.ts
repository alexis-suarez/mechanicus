import { Component, AfterViewInit, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// DataTables
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

// Models
import { Automobile } from 'src/app/models/automobile';

// Service
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

@Component({
  selector: 'app-automobile-view',
  templateUrl: './automobile-view.component.html',
  styleUrls: ['./automobile-view.component.css']
})
export class AutomobileViewComponent implements AfterViewInit, OnDestroy, OnInit {

  // Datatables
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  private automobile: Automobile;
  private status: number;
  private id: string;

  constructor(private service: AutomobileService,
    private router: Router,
    private active: ActivatedRoute) {
    this.active.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    if (this.service.isEmpty()) {
      // Load the data on the table
      this.get(this.id);
    }

    // Initialize Model
    this.clrModel();

    this.dtOptions = {
      dom: '<\'row mt-4\'<\'col-sm-12 col-md-6\'lB><\'col-sm-12 col-md-6\'f>>' +
      '<\'row\'<\'table-responsive\'<\'col-sm-12\'tr>>>' +
      '<\'row\'<\'col-sm-12 col-md-5\'i><\'col-sm-12 col-md-7\'p>>',
      pagingType: 'full_numbers'
    };

    // this.rerender();
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
  public getList(): Array<Automobile> {
    return this.service.getList();
  }

  // Check if is Empty
  public isEmpty(): boolean {
    return this.service.isEmpty();
  }

  // Get Model
  public getModel(): Automobile {
    return this.automobile;
  }

  // Get Status
  public getStatus(): number {
    return this.status;
  }

  // Get Id
  public getId(): string {
    return this.id;
  }

  // Set Status
  public setStatus(value: number): void {
    this.status = value;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.automobile = new Automobile();
  }

  // Go Back
  public goBack(): void {
    this.router.navigate(['/client-view']);
    this.service.setList([]);
  }

  // Function for CRUD
  public delete(id: string, index: number): void {
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
            this.service.delList(index);
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

  public getOne(id: string): void {
    this.service.getOne(id).subscribe(response => {
      console.log(response);
      if (response.success) {
        this.automobile = response.data;
      }
      // this.rerender();
    }, error => {
      console.log(error);
    });
  }

  private get(id: string): void {
    this.service.get(id).subscribe(response => {
      if (response.success) {
        this.service.setList(response.data);
      }
      this.rerender();
    }, error => {
      console.log(error);
    });
  }
}
