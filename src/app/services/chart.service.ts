// src/app/services/chart.service.ts
import { Injectable } from '@angular/core';
import { Chart, ChartType, ChartData, ChartOptions } from 'chart.js/auto';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  public createChart(
    canvas: HTMLCanvasElement,
    type: ChartType,
    data: ChartData,
    options?: ChartOptions
  ): Chart {
    return new Chart(canvas, {
      type,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        ...options
      }
    });
  }
}