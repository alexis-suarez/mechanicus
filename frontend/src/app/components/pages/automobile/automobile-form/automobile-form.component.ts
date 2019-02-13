import { Component, OnInit, Input } from '@angular/core';

// Models
import { Automobile } from 'src/app/models/automobile';

// Service
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import Swal from 'sweetalert2';

@Component({
  selector: 'app-automobile-form',
  templateUrl: './automobile-form.component.html',
  styleUrls: ['./automobile-form.component.css']
})
export class AutomobileFormComponent implements OnInit {

  @Input() automobile: Automobile;
  @Input() status: boolean;
  @Input() id: string;

  constructor(private service: AutomobileService) { }

  ngOnInit() {
    console.log(this.id);
    this.clrModel();
  }

  public clrModel(): void {
    this.automobile = new Automobile();
  }

  public newAutomobile(): void {
    this.automobile.client = this.id;
    const data = this.automobile;
    console.log(data);
    this.service.post(this.automobile).subscribe(response => {
      console.log(response);
      if (response.status) {
        this.service.addList(data);
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
    this.clrModel();
  }

  public updAutomobile(id: string): void {
    //
  }
}
