import {
    ApexNonAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexPlotOptions,
    ApexStroke,
    ApexTitleSubtitle,
    ApexGrid,
    ApexFill,
    ApexYAxis,
    ApexLegend,
    ApexTooltip,
    ApexResponsive,
    ApexAxisChartSeries
} from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
    plotOptions?: {
        bar?: ApexPlotOptions['bar'];
      };    
    responsive: ApexResponsive[];
    tooltip?: ApexTooltip;
    dataLabels?: ApexDataLabels;
    grid?: ApexGrid;
    colors?: string[];
    
};



export type RadialChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    grid: ApexGrid;
    labels: string[];
    colors?: string[];
};
