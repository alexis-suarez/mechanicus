import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Automobile } from 'src/app/models/automobile';

// Service
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-automobile-view',
  templateUrl: './automobile-view.component.html',
  styleUrls: ['./automobile-view.component.css']
})
export class AutomobileViewComponent implements OnInit {

  private automobile: Automobile;
  private status: boolean;

  @Input() slider: boolean;
  @Input() client: string;

  constructor(private service: AutomobileService, private router: Router) { }

  ngOnInit() {
    // Load the data on the table
    // this.viewAutomobile();
    console.log(this.client);

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
  public getStatus(): boolean {
    return this.status;
  }

  // Set Status
  public setStatus(value: boolean): void {
    this.status = value;
  }

  // Get Slider
  public getSlider(): boolean {
    return this.slider;
  }

  // Set Slider
  public setSlider(value: boolean): void {
    this.slider = value;
  }

  // Clear and Initialize Model
  public clrModel(): void {
    this.automobile = new Automobile();
  }

  // Go Back
  public goBack(): void {
    this.router.navigate(['/client-view']);
  }

  // Function for CRUD
  public delAutomobile(id: string, index: number): void {
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
          if (response.status) {
            this.service.delList(index);
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

  public getAutomobile(id: string): void {
    this.service.get(id).subscribe(response => {
      if (response.status) {
        this.automobile = response.data;
      }
    }, error => {
      console.log(error);
    });
  }

  public viewAutomobile(): void {
    this.service.viewAutomobile(this.client).subscribe(response => {
      if (response.status) {
        this.service.setList(response.data);
      }
    }, error => {
      console.log(error);
    });
  }
}
