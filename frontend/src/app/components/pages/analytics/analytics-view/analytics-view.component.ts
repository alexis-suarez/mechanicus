import { Component, OnInit } from '@angular/core';

// Service
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrls: ['./analytics-view.component.css']
})
export class AnalyticsViewComponent implements OnInit {

  public radarChartData: any = [];
  public barChartData: any = [];
  public barChartLabels: string[];
  public polarAreaChartLabels: string[];
  public polarAreaChartData: number[];

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.service.getTransmision().subscribe(response => {
      console.log(response);
      if (response.success) {
        console.log(response.success);
        this.radarChartData = response.data;
      }
    }, error => {
      console.log(error);
    });
    this.service.getAmountService().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.barChartLabels = response.employee;
        this.barChartData = response.data;
      }
    }, error => {
      console.log(error);
    });
    this.service.getCorrelation().subscribe(response => {
      console.log(response);
      if (response.success) {
        this.polarAreaChartLabels = response.label;
        this.polarAreaChartData = response.data;
      }
    }, error => {
      console.log(error);
    });
  }
}
