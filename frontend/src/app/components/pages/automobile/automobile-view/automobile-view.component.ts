import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
export class AutomobileViewComponent implements OnInit {

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
      this.getOne(this.id);
    }

    // Initialize Model
    this.clrModel();
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
  public delAutomobile(id: string, index: number): void {
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
          if (response.status) {
            this.service.delList(index);
          }
        }, error => {
          // console.log(error);
        });
        Swal(
          '¡Borrado!',
          'Información Borrada Correctamente :D',
          'success'
        );
      }
    });
  }

  private getOne(id: string): void {
    this.service.getOne(id).subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      // console.log(error);
    });
  }

  private get(): void {
    this.service.get().subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      // console.log(error);
    });
  }
}
