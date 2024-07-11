import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexNonAxisChartSeries, NgApexchartsModule, ApexPlotOptions } from 'ng-apexcharts';

@Component({
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Configurações para o grafo de ligação
  graphSeries!: ApexAxisChartSeries;
  graphChart!: ApexChart;
  graphXaxis!: ApexXAxis;
  graphYaxis!: ApexYAxis;

  // Configurações para o gráfico de score Serasa
  serasaSeries!: ApexNonAxisChartSeries;
  serasaChart!: ApexChart;
  serasaPlotOptions!: ApexPlotOptions;

  ngOnInit() {
    this.initGraphChart();
    this.initSerasaChart();
  }

  initGraphChart() {
    this.graphSeries = [
      {
        name: "Ligação",
        data: [
          { x: "Andre Soares Gomes", y: 3 },
          { x: "Pessoa 1", y: 1 },
          { x: "Pessoa 2", y: 2 }
        ]
      }
    ];

    this.graphChart = {
      type: "scatter",
      height: 350
    };

    this.graphXaxis = {
      categories: ['Andre Soares Gomes', 'Pessoa 1', 'Pessoa 2']
    };

    this.graphYaxis = {
      max: 4
    };
  }

  initSerasaChart() {
    this.serasaSeries = [
      730
    ];

    this.serasaChart = {
      type: "radialBar",
      height: 350
    };

    this.serasaPlotOptions = {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              return "750" // Exemplo de score
            }
          }
        }
      }
    };
  }

}
