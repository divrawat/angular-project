import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: Date;
  orders: number;
  totalSpent: number;
  status: 'Active' | 'Inactive' | 'New';
  tier: 'Basic' | 'Silver' | 'Gold' | 'Platinum';
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  imports:[CommonModule]
})
export class CustomersComponent {
  customersData: Customer[] = [
    {
      id: 1001,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      joinDate: new Date('2023-01-15'),
      orders: 12,
      totalSpent: 2450,
      status: 'Active',
      tier: 'Gold'
    },
    {
      id: 1002,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '(555) 987-6543',
      joinDate: new Date('2024-03-10'),
      orders: 3,
      totalSpent: 450,
      status: 'New',
      tier: 'Basic'
    },
    {
      id: 1003,
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      phone: '(555) 456-7890',
      joinDate: new Date('2022-11-05'),
      orders: 25,
      totalSpent: 5875,
      status: 'Active',
      tier: 'Platinum'
    },
    {
      id: 1004,
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      phone: '(555) 234-5678',
      joinDate: new Date('2023-08-20'),
      orders: 8,
      totalSpent: 1200,
      status: 'Active',
      tier: 'Silver'
    },
    {
      id: 1005,
      name: 'Robert Wilson',
      email: 'robert.w@example.com',
      phone: '(555) 345-6789',
      joinDate: new Date('2021-05-12'),
      orders: 0,
      totalSpent: 0,
      status: 'Inactive',
      tier: 'Basic'
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
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getTierClass(tier: string): string {
    switch (tier) {
      case 'Basic':
        return 'text-gray-600';
      case 'Silver':
        return 'text-gray-700';
      case 'Gold':
        return 'text-yellow-600';
      case 'Platinum':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  }
}