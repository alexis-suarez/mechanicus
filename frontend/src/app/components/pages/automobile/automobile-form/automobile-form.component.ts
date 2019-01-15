import { Component, OnInit, Input } from '@angular/core';

// Models
import { Automobile } from 'src/app/models/automobile';

// Service
import { AutomobileService } from 'src/app/services/automobile.service';

// Sweet Alert2 Import
import swal from 'sweetalert2';

@Component({
  selector: 'app-automobile-form',
  templateUrl: './automobile-form.component.html',
  styleUrls: ['./automobile-form.component.css']
})
export class AutomobileFormComponent implements OnInit {

  @Input() automobile: Automobile;
  @Input() status: boolean;

  constructor(private service: AutomobileService) { }

  ngOnInit() {
    this.clrModel();
  }

  public clrModel(): void {
    this.automobile = new Automobile();
    this.automobile.client = '5bf035330d403d18be0bd246';
  }

  public newAutomobile(): void {
    const data = this.automobile;
    this.service.post(this.automobile).subscribe(response => {
      if (response.status) {
        this.service.addList(data);
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Correcto :D',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }, error => {
      console.log(error);
      swal({
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
