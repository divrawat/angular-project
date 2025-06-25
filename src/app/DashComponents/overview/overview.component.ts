// src/app/dashboard/overview/overview.component.ts
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChartRef!: ElementRef;
  @ViewChild('barChart') barChartRef!: ElementRef;
  @ViewChild('pieChart') pieChartRef!: ElementRef;

  constructor(private chartService: ChartService) {}

  ngAfterViewInit(): void {
    this.createCharts();
  }

  private createCharts(): void {
    // Line Chart
    this.chartService.createChart(this.lineChartRef.nativeElement, 'line', {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: '#3b82f6',
        tension: 0.4
      }]
    }, {
      plugins: {
        title: { display: true, text: 'Monthly Sales Trend' }
      }
    });

    // Bar Chart
    this.chartService.createChart(this.barChartRef.nativeElement, 'bar', {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Revenue',
        data: [65, 59, 80, 81],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
      }]
    }, {
      plugins: {
        title: { display: true, text: 'Quarterly Revenue' }
      }
    });

    // Pie Chart
    this.chartService.createChart(this.pieChartRef.nativeElement, 'pie', {
      labels: ['Electronics', 'Clothing', 'Home Goods', 'Other'],
      datasets: [{
        data: [300, 500, 100, 200],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
      }]
    }, {
      plugins: {
        title: { display: true, text: 'Product Categories' }
      }
    });
  }
}