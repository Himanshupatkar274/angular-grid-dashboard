import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { BaseService } from '../../../../Base/Services/base.service';
import { SharedModule } from '../../../Shared/Shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions, RadialChartOptions } from '../../../../Base/Model/Constents/chartOption';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../../../Feature/components/edit-profile/edit-profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  chartOptions: Partial<ChartOptions>;
  radialChartOptions: Partial<RadialChartOptions>;
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  imageUrl: string;

  constructor(
    private baseService: BaseService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initializeDashboard();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  initializeDashboard(): void {
    this.getRandomUserProfile();
    this.setChartOptions();
    this.setRadialChartOptions();
    this.loadGridStructure();
  }

  loadGridStructure(): void {
    this.baseService.getGridData().subscribe((data: any) => {
      const columns = data.grid_columns.concat({
        column_key: 'action',
        column_name: 'Action',
        type: 'action',
        align: 'left'
      });

      const tableData = data.grid_data.map((item: any) => ({
        ...item,
        name: item.name || { first_name: '-', last_name: '', handle: '' },
        teams: Array.isArray(item.teams) ? item.teams : [],
        image: this.imageUrl,
        action: [
          { iconName: 'delete' },
          { iconName: 'edit' }
        ]
      }));

      this.dataSource.data = tableData;
      this.displayedColumns = ['select', ...columns.map((col: any) => col.column_key)];
    });
  }

  setChartOptions(): void {
    this.chartOptions = {
      series: [
        { name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43] },
        { name: 'PRODUCT B', data: [13, 23, 20, 8, 13, 27] },
        { name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14] }
      ],
      chart: {
        type: 'bar',
        height: 250,
        width: '95%',
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors: ['#7144cf', '#b294f1', '#c3cbd3'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: 'bottom', offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: 'category', categories: ['01/2011', '02/2011', '03/2011', '04/2011', '05/2011', '06/2011'] },
      legend: { position: 'right', offsetY: 40 },
      fill: { opacity: 1 }
    };
  }

  setRadialChartOptions(): void {
    this.radialChartOptions = {
      series: [76],
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: { enabled: true }
      },
      colors: ['#c3cbd3'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#c3cbd3',
            margin: 5
          },
          dataLabels: {
            name: { show: false },
            value: { offsetY: -2, fontSize: '22px' }
          }
        },
        bar: {
          borderRadius: 24,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          columnWidth: '50%'
        }
      },
      grid: { padding: { top: -10 } },
      labels: ['Average Results']
    };
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  toggleAllRows(): void {
    this.isAllSelected() ? this.selection.clear() : this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: any): string {
    return !row ? `${this.isAllSelected() ? 'deselect' : 'select'} all`
      : `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

  getRandomUserProfile(): void {
    this.baseService.getRandomImages().subscribe((data: any) => {
      this.imageUrl = data?.results?.[0]?.picture?.large || '';
    });
  }

  getTeamClass(value: string): string {
    switch (value?.toLowerCase()) {
      case 'design': return 'design';
      case 'product': return 'product';
      case 'marketing': return 'marketing';
      default: return 'default';
    }
  }

  onAction(action: string, row: any): void {
    console.log(`Action: ${action}`, row);
    if (action === 'delete') {
      this.dataSource.data = this.dataSource.data.filter((item: any) => item !== row);
    } else {
      this.openEditProfileModal();
    }
  }

  openEditProfileModal() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '600px',
      height: '500px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Updated profile data:', result);
      }
    });
  }
}