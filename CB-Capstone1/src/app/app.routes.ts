import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientInquiriesComponent } from './client-inquiries/client-inquiries.component';


export const routes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full' }  ,
    {path: 'Home',       component: HomeComponent},
    {path: 'Inquiries',  component: ClientInquiriesComponent}
];
