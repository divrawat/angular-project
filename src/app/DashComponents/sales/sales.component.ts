import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SaleItem {
  id: number;
  name: string;
  price: number;
  purchaseDate: Date;
  category: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl:'./sales.component.css',
  imports:[CommonModule]
})
export class SalesComponent {
  salesData: SaleItem[] = [
    {
      id: 1001,
      name: 'iPhone 15 Pro',
      price: 999,
      purchaseDate: new Date('2024-05-15'),
      category: 'Electronics',
      status: 'Completed'
    },
    {
      id: 1002,
      name: 'MacBook Air M2',
      price: 1099,
      purchaseDate: new Date('2024-05-18'),
      category: 'Electronics',
      status: 'Completed'
    },
    {
      id: 1003,
      name: 'AirPods Pro',
      price: 249,
      purchaseDate: new Date('2024-05-20'),
      category: 'Accessories',
      status: 'Pending'
    },
    {
      id: 1004,
      name: 'Apple Watch Series 9',
      price: 399,
      purchaseDate: new Date('2024-05-22'),
      category: 'Wearables',
      status: 'Completed'
    },
    {
      id: 1005,
      name: 'iPad Pro',
      price: 799,
      purchaseDate: new Date('2024-05-25'),
      category: 'Tablets',
      status: 'Cancelled'
    }
  ];

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}