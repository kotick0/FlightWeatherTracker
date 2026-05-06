import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports'
    },
    children: [
      {
        path: '',
        redirectTo: 'metar',
        pathMatch: 'full'
      },
      {
        path: 'metar',
        loadComponent: () => import('./metar/metar.component').then(m => m.MetarComponent),
        data: {
          title: 'METAR'
        }
      },
      {
        path: 'taf',
        loadComponent: () => import('./taf/taf.component').then(m => m.TafComponent),
        data: {
          title: 'TAF'
        }
      },
      {
        path: 'sigmet',
        loadComponent: () => import('./sigmet/sigmet.component').then(m => m.SigmetComponent),
        data: {
          title: 'SIGMET'
        }
      }
    ]
  }
];
