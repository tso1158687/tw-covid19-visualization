import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import {
  CHART_DATA_GROCERY,
  CHART_DATA_HOME,
  CHART_DATA_PARK,
  CHART_DATA_RETAIL,
  CHART_DATA_TRANSPORTATION,
  CHART_DATA_WORK,
  CHART_LABEL,
} from '../../data/chart-data';

@Component({
  selector: 'app-mobility',
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.scss'],
})
export class MobilityComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart:
    | BaseChartDirective
    | undefined;
  options = [
    { value: 1, label: '從今年起' },
    { value: 2, label: '近一個月' },
  ];
  option = 1;
  public lineChartData: ChartDataSets[] = [
    {
      data: CHART_DATA_RETAIL,
      label: '零售店和休閒設施',
    },
    {
      data: CHART_DATA_GROCERY,
      label: '雜貨店和藥局',
    },
    {
      data: CHART_DATA_PARK,
      label: '公園',
    },
    {
      data: CHART_DATA_TRANSPORTATION,
      label: '大眾運輸站',
    },
    {
      data: CHART_DATA_WORK,
      label: '工作場所',
    },
    {
      data: CHART_DATA_HOME,
      label: '住宅區',
    },
  ];
  public lineChartLabels: Label[] = CHART_LABEL;
  lineChartOptions: ChartOptions = {
    responsive: true,
    responsiveAnimationDuration: 300,
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: (tooltipItems) => {
          const text = Number(tooltipItems.value) > 0 ? '上升' : '下降';
          return `${text} ${tooltipItems.value} %`;
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
    },
  };
  lineChartColors: Color[] = [];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}
  changeChartScale(type: number): void {
    if (type === 1) {
      this.lineChartLabels = CHART_LABEL;
    } else {
      this.lineChartLabels = this.lineChartLabels.slice(
        Math.max(this.lineChartLabels.length - 10, 1)
      );
    }
    this.chart?.update();
  }
}
