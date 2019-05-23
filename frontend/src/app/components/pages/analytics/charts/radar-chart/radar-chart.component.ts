import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {

  // Radar
  public radarChartLabels: string[] = ['Automatico', 'Automatizadas o secuenciales', 'Automatizada de doble embrague', 'CVT'];
  public radarOptions: any = {
    responsive: true
  };

  @Input() radarChartData: any = [];

  // public radarChartData: any = [
  //   {data: [65, 59, 90, 81], label: 'Series A'}
  // ];
  public radarChartType = 'radar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
