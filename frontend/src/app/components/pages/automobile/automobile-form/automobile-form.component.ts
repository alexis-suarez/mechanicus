import { Component, OnInit, Input } from '@angular/core';

// Models
import { Automobile } from 'src/app/models/automobile';

// Service
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

// Variables for jQuery
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-automobile-form',
  templateUrl: './automobile-form.component.html',
  styleUrls: ['./automobile-form.component.css']
})
export class AutomobileFormComponent implements OnInit {

  @Input() automobile: Automobile;
  @Input() status: number;
  @Input() id: string;

  private list = [
    {'type': 'transmision'},
    {'type': 'Automatico'},
    {'type': 'Automatizadas o secuenciales'},
    {'type': 'Automatizada de doble embrague'},
    {'type': 'CVT'}
  ];

  constructor(private service: AutomobileService) { }

  ngOnInit() {
    // Initialize Model
    this.initializer();
  }

  // Clear and Initialize Model
  public initializer(): void {
    this.automobile = new Automobile();
  }

  public getList(): any {
    return this.list;
  }

  public getBrand(): Array<string> {
    return this.service.getBrand();
  }

  public closeModal(): void {
    $(function () {
      $('#modal').modal('toggle');
   });
  }

  public post(): void {
    this.automobile.client = this.id;
    const data = this.automobile;
    this.service.post(this.automobile).subscribe(response => {
      if (response.success) {
        this.service.insert(data);
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Correcto :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, error => {
      console.log(error);
      Swal({
        position: 'top-end',
        type: 'error',
        title: 'Error :(',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.initializer();
    this.closeModal();
  }

  public put(id: string): void {
    const data = this.automobile;
    this.service.put(id, this.automobile).subscribe(response => {
      if (response.success) {
        this.service.setItemList(data);
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Actualizado :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, error => {
      console.log(error);
      Swal({
        position: 'top-end',
        type: 'error',
        title: 'Error :(',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.initializer();
    this.closeModal();
  }
}
