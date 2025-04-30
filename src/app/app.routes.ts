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
import { Guideline111Component } from './guideline-details/guideline-1.1.1/guideline-111.component';
import { Guideline131Component } from './guideline-details/guideline-1.3.1/guideline-131.component';
import { Guideline132Component } from './guideline-details/guideline-1.3.2/guideline-132.component';
import { Guideline133Component } from './guideline-details/guideline-1.3.3/guideline-133.component';
import { Guideline134Component } from './guideline-details/guideline-1.3.4/guideline-134.component';
import { Guideline135Component } from './guideline-details/guideline-1.3.5/guideline-135.component';
import { Guideline1410Component } from './guideline-details/guideline-1.4.10/guideline-1410.component';
import { Guideline141Component } from './guideline-details/guideline-1.4.1/guideline-141.component';
import { Guideline143Component } from './guideline-details/guideline-1.4.3/guideline-143.component';
import { Guideline144Component } from './guideline-details/guideline-1.4.4/guideline-144.component';
import { Guideline145Component } from './guideline-details/guideline-1.4.5/guideline-145.component';
import { Guideline1411Component } from './guideline-details/guideline-1.4.11/guideline-1411.component';
import { Guideline1412Component } from './guideline-details/guideline-1.4.12/guideline-1412.component';
import { Guideline1413Component } from './guideline-details/guideline-1.4.13/guideline-1413.component';
import { Guideline211Component } from './guideline-details/guideline-2.1.1/guideline-211.component';
import { Guideline212Component } from './guideline-details/guideline-2.1.2/guideline-212.component';
import { Guideline214Component } from './guideline-details/guideline-2.1.4/guideline-214.component';
import { Guideline221Component } from './guideline-details/guideline-2.2.1/guideline-221.component';
import { Guideline222Component } from './guideline-details/guideline-2.2.2/guideline-222.component';
import { Guideline231Component } from './guideline-details/guideline-2.3.1/guideline-231.component';
import { Guideline2411Component } from './guideline-details/guideline-2.4.11/guideline-2411.component';
import { Guideline242Component } from './guideline-details/guideline-2.4.2/guideline-242.component';
import { Guideline241Component } from './guideline-details/guideline-2.4.1/guideline-241.component';
import { Guideline243Component } from './guideline-details/guideline-2.4.3/guideline-243.component';
import { Guideline244Component } from './guideline-details/guideline-2.4.4/guideline-244.component';
import { Guideline245Component } from './guideline-details/guideline-2.4.5/guideline-245.component';
import { Guideline246Component } from './guideline-details/guideline-2.4.6/guideline-246.component';
import { Guideline247Component } from './guideline-details/guideline-2.4.7/guideline-247.component';
import { Guideline251Component } from './guideline-details/guideline-2.5.1/guideline-251.component';
import { Guideline252Component } from './guideline-details/guideline-2.5.2/guideline-252.component';
import { Guideline253Component } from './guideline-details/guideline-2.5.3/guideline-253.component';
import { Guideline254Component } from './guideline-details/guideline-2.5.4/guideline-254.component';
import { Guideline257Component } from './guideline-details/guideline-2.5.7/guideline-257.component';
import { Guideline258Component } from './guideline-details/guideline-2.5.8/guideline-258.component';
import { Guideline311Component } from './guideline-details/guideline-3.1.1/guideline-311.component';
import { Guideline312Component } from './guideline-details/guideline-3.1.2/guideline-312.component';
import { Guideline321Component } from './guideline-details/guideline-3.2.1/guideline-321.component';
import { Guideline322Component } from './guideline-details/guideline-3.2.2/guideline-322.component';
import { Guideline323Component } from './guideline-details/guideline-3.2.3/guideline-323.component';
import { Guideline324Component } from './guideline-details/guideline-3.2.4/guideline-324.component';
import { Guideline326Component } from './guideline-details/guideline-3.2.6/guideline-326.component';
import { Guideline331Component } from './guideline-details/guideline-3.3.1/guideline-331.component';
import { Guideline332Component } from './guideline-details/guideline-3.3.2/guideline-332.component';
import { Guideline333Component } from './guideline-details/guideline-3.3.3/guideline-333.component';
import { Guideline337Component } from './guideline-details/guideline-3.3.7/guideline-337.component';
import { Guideline338Component } from './guideline-details/guideline-3.3.8/guideline-338.component';
import { Guideline412Component } from './guideline-details/guideline-4.1.2/guideline-412.component';
import { Guideline413Component } from './guideline-details/guideline-4.1.3/guideline-413.component';

export const routes: Routes = [
  /* Default redirect */
  {
    path: '',
    redirectTo: 'wcag-guidelines',
    pathMatch: 'full',
  },

  /* Landing page */
  {
    path: 'wcag-guidelines',
    component: WcagGuidelinesComponent,
  },

  /* Pages */
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

  /* Guidelines details pages */
  {
    path: 'guidelines/1.1.1',
    component: Guideline111Component,
  },
  {
    path: 'guidelines/1.3.1',
    component: Guideline131Component,
  },
  {
    path: 'guidelines/1.3.2',
    component: Guideline132Component,
  },
  {
    path: 'guidelines/1.3.3',
    component: Guideline133Component,
  },
  {
    path: 'guidelines/1.3.4',
    component: Guideline134Component,
  },
  {
    path: 'guidelines/1.3.5',
    component: Guideline135Component,
  },
  {
    path: 'guidelines/1.4.1',
    component: Guideline141Component,
  },
  {
    path: 'guidelines/1.4.3',
    component: Guideline143Component,
  },
  {
    path: 'guidelines/1.4.4',
    component: Guideline144Component,
  },
  {
    path: 'guidelines/1.4.5',
    component: Guideline145Component,
  },
  {
    path: 'guidelines/1.4.10',
    component: Guideline1410Component,
  },
  {
    path: 'guidelines/1.4.11',
    component: Guideline1411Component,
  },
  {
    path: 'guidelines/1.4.12',
    component: Guideline1412Component,
  },
  {
    path: 'guidelines/1.4.13',
    component: Guideline1413Component,
  },
  {
    path: 'guidelines/2.1.1',
    component: Guideline211Component,
  },
  {
    path: 'guidelines/2.1.2',
    component: Guideline212Component,
  },
  {
    path: 'guidelines/2.1.4',
    component: Guideline214Component,
  },
  {
    path: 'guidelines/2.2.1',
    component: Guideline221Component,
  },
  {
    path: 'guidelines/2.2.2',
    component: Guideline222Component,
  },
  {
    path: 'guidelines/2.3.1',
    component: Guideline231Component,
  },
  {
    path: 'guidelines/2.4.1',
    component: Guideline241Component,
  },
  {
    path: 'guidelines/2.4.2',
    component: Guideline242Component,
  },
  {
    path: 'guidelines/2.4.3',
    component: Guideline243Component,
  },
  {
    path: 'guidelines/2.4.4',
    component: Guideline244Component,
  },
  {
    path: 'guidelines/2.4.5',
    component: Guideline245Component,
  },
  {
    path: 'guidelines/2.4.6',
    component: Guideline246Component,
  },
  {
    path: 'guidelines/2.4.7',
    component: Guideline247Component,
  },
  {
    path: 'guidelines/2.4.11',
    component: Guideline2411Component,
  },
  {
    path: 'guidelines/2.5.1',
    component: Guideline251Component,
  },
  {
    path: 'guidelines/2.5.2',
    component: Guideline252Component,
  },
  {
    path: 'guidelines/2.5.3',
    component: Guideline253Component,
  },
  {
    path: 'guidelines/2.5.4',
    component: Guideline254Component,
  },
  {
    path: 'guidelines/2.5.7',
    component: Guideline257Component,
  },
  {
    path: 'guidelines/2.5.8',
    component: Guideline258Component,
  },
  {
    path: 'guidelines/3.1.1',
    component: Guideline311Component,
  },
  {
    path: 'guidelines/3.1.2',
    component: Guideline312Component,
  },
  {
    path: 'guidelines/3.2.1',
    component: Guideline321Component,
  },
  {
    path: 'guidelines/3.2.2',
    component: Guideline322Component,
  },
  {
    path: 'guidelines/3.2.3',
    component: Guideline323Component,
  },
  {
    path: 'guidelines/3.2.4',
    component: Guideline324Component,
  },
  {
    path: 'guidelines/3.2.6',
    component: Guideline326Component,
  },
  {
    path: 'guidelines/3.3.1',
    component: Guideline331Component,
  },
  {
    path: 'guidelines/3.3.2',
    component: Guideline332Component,
  },
  {
    path: 'guidelines/3.3.3',
    component: Guideline333Component,
  },
  {
    path: 'guidelines/3.3.7',
    component: Guideline337Component,
  },
  {
    path: 'guidelines/3.3.8',
    component: Guideline338Component,
  },
  {
    path: 'guidelines/4.1.2',
    component: Guideline412Component,
  },
  {
    path: 'guidelines/4.1.3',
    component: Guideline413Component,
  },
];
