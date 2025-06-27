import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SidebarItem {
  label: string;
  route?: string;
  icon?: string;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showDropdowns: { [key: string]: boolean } = {};
     
    

  sidebarItems: SidebarItem[] = [
    {
      label: 'Overview',
      route: '/dashboard/overview',
      icon: '📊',
    },
    {
      label: 'Sales',
      route: '/dashboard/sales',
      icon: '💰',
    },
    {
      label: 'Products',
      icon: '🛍️',
      children: [
        { label: 'SmartPhones', route: '/dashboard/products/mobiles', icon: '📱' },
        { label: 'Laptops', route: '/dashboard/products/laptops', icon: '💻' },
        { label: 'Headphones', route: '/dashboard/products/headphones', icon: '🎧' },
      ],
    },
        {
      label: 'Customers',
      route: '/dashboard/customers',
      icon: '👥',
    },
    {
      label: 'Settings',
      route: '/dashboard/settings',
      icon: '⚙️',
    }, 
    {
      label: 'TempEmail',
      route: '/dashboard/temp-mail',
      icon: '⚙️',
    }
  ];

  toggleDropdown(label: string): void {
    this.showDropdowns[label] = !this.showDropdowns[label];
  }

  isDropdownOpen(label: string): boolean {
    return !!this.showDropdowns[label];
  }
}