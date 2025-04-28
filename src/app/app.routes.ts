import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { LocationsAndPrintersComponent } from './locations-and-printers/locations-and-printers.component';
import { PrintersComponent } from './printers/printers.component';
import { ConnectorsComponent } from './connectors/connectors.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { StaffResourcesComponent } from './staff-resources/staff-resources.component';
import { WcagGuidelinesComponent } from './wcag-guidelines/wcag-guidelines.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'wcag-guidelines',
    pathMatch: 'full',
  },
  {
    path: 'wcag-guidelines',
    component: WcagGuidelinesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'user-accounts',
    component: UserAccountsComponent,
  },
  {
    path: 'locations-and-printers',
    component: LocationsAndPrintersComponent,
  },
  {
    path: 'printers',
    component: PrintersComponent,
  },
  {
    path: 'connectors',
    component: ConnectorsComponent,
  },
  {
    path: 'company-profile',
    component: CompanyProfileComponent,
  },
  {
    path: 'staff-resources',
    component: StaffResourcesComponent,
  },
];
