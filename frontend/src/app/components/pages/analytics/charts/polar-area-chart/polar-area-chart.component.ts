import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent {
  // PolarArea
  @Input() polarAreaChartLabels: string[];
  @Input() polarAreaChartData: number[];
  public polarAreaLegend = true;
  public polarAreaOptions: any = {
    responsive: true
  };

  public polarAreaChartType = 'polarArea';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
