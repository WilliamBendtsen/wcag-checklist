import { Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'hero-detail',
    component: HeroDetailComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
];
