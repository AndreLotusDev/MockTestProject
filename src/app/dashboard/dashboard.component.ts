import { Component, inject, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexNonAxisChartSeries,
  NgApexchartsModule,
  ApexPlotOptions,
  ApexFill,
} from 'ng-apexcharts';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConnectionInfoComponent } from '../connection-info/connection-info.component';
import { TabChangerService } from '../tab-change/tab-changer.service';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

export type SerasaChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  standalone: true,
  imports: [
    NgApexchartsModule,
    OrganizationChartModule,
    ButtonModule,
    TimelineModule,
    SkeletonModule,
    CommonModule,
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // Configurações para o gráfico de score Serasa
  serasaChartOptions: SerasaChartOptions;

  private MAX_SERASA_VALUE = 1000;

  data: TreeNode[] = [
    {
      type: 'socialmedia',
      data: { name: 'Facebook' },
      expanded: true,
      children: [
        {
          type: 'person',
          label: 'Marcus Vinícius',
          data: {
            id: 1,
            img: 'https://media.discordapp.net/attachments/1150797086112088085/1261002519690084382/20230331_232004.jpg?ex=66915f9c&is=66900e1c&hm=5778670d1a9df2dace20a0938da99a7b41f0d62d7c0e96632b6f161b4d853ff3&=&format=webp&width=507&height=676',
            info: {
              name: 'Marcus Vinícius',
              role: 'Analista Angular',
              age: 22,
              resume:
                'Após uma análise detalhada e abrangente, concluímos que o desenvolvedor Angular em questão apresenta um perfil seguro e estável, mas com algumas ressalvas em relação à sua situação financeira. Abaixo, apresentamos os principais pontos observados:',
              serasa:
                '<strong>Serasa</strong>: O desenvolvedor tem problemas constantes com o Serasa, indicando dívidas e inadimplências recorrentes. Isso pode afetar sua capacidade de obter crédito e pode ser um ponto de atenção para futuros empregadores ou parceiros de negócios.',
              socialMedia:
                'Não foram encontrados conteúdos perigosos ou criminosos em suas redes sociais. O desenvolvedor mantém um perfil adequado e profissional em plataformas como LinkedIn, Twitter, e GitHub.',
              socialMediaBehavior:
                'A análise das interações e postagens mostra que o desenvolvedor mantém um comportamento respeitoso e adequado, sem sinais de extremismo ou comportamentos inadequados.',
              criminalRecord:
                'Boletim de Ocorrência: Não há registros de boletins de ocorrência associados ao desenvolvedor. Isso indica um histórico limpo em termos de envolvimento com atividades criminosas.',
              conclusion:
                'O desenvolvedor Angular analisado possui um perfil seguro em termos de comportamento online e histórico criminal, o que é um ponto positivo significativo. No entanto, os problemas constantes com o Serasa representam um desafio financeiro que pode necessitar de atenção. Recomenda-se que o desenvolvedor busque resolver essas questões para melhorar sua situação financeira e reduzir riscos associados a inadimplências.',
            },
          },
        },
        {
          type: 'person',
          label: 'Guilherme Guedes',
          data: {
            id: 2,
            img: 'https://media.discordapp.net/attachments/1150797086112088085/1261004125718446100/guedes.jpg?ex=6691611b&is=66900f9b&hm=b6e05e53bbe81577dd62cfffdb55ad28be67475a0044dbc00bf728817c00cf4a&=&format=webp',
            info: {
              name: 'Guilherme Guedes',
              age: 26,
              role: 'Analista financeiro',
              resume:
                'Após uma análise detalhada e abrangente, concluímos que o analista financeiro Guilherme Guedes apresenta um perfil seguro e estável, mas com algumas ressalvas em relação à sua situação financeira. Abaixo, apresentamos os principais pontos observados:',
              serasa:
                '<strong> Serasa </strong>: O analista financeiro tem problemas constantes com o Serasa, indicando dívidas e inadimplências recorrentes. Isso pode afetar sua capacidade de obter crédito e pode ser um ponto de atenção para futuros empregadores ou parceiros de negócios.',
              socialMedia:
                'Não foram encontrados conteúdos perigosos ou criminosos em suas redes sociais. O analista mantém um perfil adequado e profissional em plataformas como LinkedIn e Twitter.',
              socialMediaBehavior:
                'A análise das interações e postagens mostra que o analista mantém um comportamento respeitoso e adequado, sem sinais de extremismo ou comportamentos inadequados.',
              criminalRecord:
                'Boletim de Ocorrência: Não há registros de boletins de ocorrência associados ao analista financeiro. Isso indica um histórico limpo em termos de envolvimento com atividades criminosas.',
              conclusion:
                'O analista financeiro Guilherme Guedes possui um perfil seguro em termos de comportamento online e histórico criminal, o que é um ponto positivo significativo. No entanto, os problemas constantes com o Serasa representam um desafio financeiro que pode necessitar de atenção. Recomenda-se que o analista busque resolver essas questões para melhorar sua situação financeira e reduzir riscos associados a inadimplências.',
            },
          },
        },
      ],
    },
  ];

  events = [
    {
      status: '3 novas informações',
      date: '15/10/2020 10:30',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
      image: 'game-controller.jpg',
    },
    {
      status: '1 nova informação',
      date: '15/10/2020 14:00',
      icon: 'pi pi-cog',
      color: '#673AB7',
    },
    {
      status: '5 novas informações',
      date: '15/10/2020 16:15',
      icon: 'pi pi-shopping-cart',
      color: '#FF9800',
    },
    {
      status: '2 novas informações',
      date: '16/10/2020 10:00',
      icon: 'pi pi-check',
      color: '#607D8B',
    },
  ];

  readonly _materialDialogService = inject(MatDialog);
  readonly tabChangedService = inject(TabChangerService);
  public isLoading = true;

  constructor() {
    this.serasaChartOptions = {
      series: [this.serasaScoreToPercentage(837)],
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
              formatter: function (val) {
                return (val * 10).toString();
              },
            },
          },
        },
      },
      fill: {
        colors: [
          function ({ value }: any) {
            if (value <= 20) {
              return '#e01b46';
            }

            if (value <= 40) {
              return '#e68555';
            }

            if (value <= 60) {
              return '#f9c851';
            }

            return '#277ee8';
          },
        ],
      },
      labels: ['Serasa Score'],
    };
  }

  ngOnInit() {
    this.tabChangedService.tabChange.subscribe(() => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    });
  }

  serasaScoreToPercentage(score: number): number {
    return (score * 100) / this.MAX_SERASA_VALUE;
  }

  openPersonDialog(data: any) {
    const dialogRef = this._materialDialogService.open(
      ConnectionInfoComponent,
      {
        data,
      }
    );
  }
}
