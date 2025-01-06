import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'principios', component: HomeComponent },
  { path: 'proyectos', component: HomeComponent },
  { path: 'equipo', component: HomeComponent },
  { path: 'participar', component: HomeComponent },
  { path: 'contacto', component: HomeComponent }
];
