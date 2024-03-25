import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientInquiriesComponent } from './client-inquiries/client-inquiries.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ClientTablesComponent } from './client-tables/client-tables.component';

export const routes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full' }  ,
    {path: 'Home',       component: HomeComponent},
    {path: 'Inquiries',  component: ClientInquiriesComponent},
    {path: 'Associates', component: TeamListComponent},
    {path: 'Calendar',   component: ClientTablesComponent}
];
