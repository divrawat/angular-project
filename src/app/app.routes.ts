import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './DashComponents/dashboard/dashboard.component';
import { SalesComponent } from './DashComponents/sales/sales.component';
import { ProductsComponent } from './DashComponents/products/products.component';
import { OverviewComponent } from './DashComponents/overview/overview.component';
import { SmartphonesComponent } from './DashComponents/smartphones/smartphones.component';
import { LaptopsComponent } from './DashComponents/laptops/laptops.component';
import { HeadphonesComponent } from './DashComponents/headphones/headphones.component';
import { SettingsComponent } from './DashComponents/settings/settings.component';
import { CustomersComponent } from './DashComponents/customers/customers.component';
import { ChartResolver } from './services/chart.resolver';


export const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'overview', component: OverviewComponent, resolve: { ready: ChartResolver } },
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'sales', component: SalesComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'customers', component: CustomersComponent },
            {
                path: 'products',
                component: ProductsComponent,
                children: [
                    { path: 'mobiles', component: SmartphonesComponent },
                    { path: 'laptops', component: LaptopsComponent },
                    { path: 'headphones', component: HeadphonesComponent },
                    { path: '', redirectTo: 'mobiles', pathMatch: 'full' },
                ]
            }
        ]
    }
];
