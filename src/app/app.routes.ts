import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'signin', component:SigninComponent},
    {path:'signup', component:SignupComponent},
    {path:'', component:HomeComponent},
    {path:'dashboard',component:DashboardComponent}
];
