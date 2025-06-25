// chart.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChartResolver implements Resolve<void> {
  resolve(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 25));
  }
}