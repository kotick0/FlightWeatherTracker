import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      {
        path: '',
        redirectTo: 'airports',
        pathMatch: 'full'
      },
      {
        path: 'airports',
        loadComponent: () => import('./airports/airports.component').then(m => m.AirportsComponent),
        data: {
          title: 'Airports'
        }
      },
      {
        path: 'thresholds',
        loadComponent: () => import('./thresholds/thresholds.component').then(m => m.ThresholdsComponent),
        data: {
          title: 'Thresholds'
        }
      }
    ]
  }
];
