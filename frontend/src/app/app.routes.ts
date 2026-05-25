import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layout/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'metar',
        loadComponent: () =>
          import('./views/metar/metar.component').then(m => m.MetarComponent)
      },
      {
        path: 'taf/long',
        loadComponent: () =>
          import('./views/taf/long-taf.component').then(m => m.LongTafComponent)
      },
      {
        path: 'taf/short',
        loadComponent: () =>
          import('./views/taf/short-taf.component').then(m => m.ShortTafComponent)
      },
      {
        path: 'sigmet',
        loadComponent: () =>
          import('./views/sigmet/sigmet.component').then(m => m.SigmetComponent)
      },
      {
        path: 'open-meteo',
        loadComponent: () =>
          import('./views/open-meteo/open-meteo.component').then(m => m.OpenMeteoComponent)
      },
      {path: '', redirectTo: 'metar', pathMatch: 'full'}
    ]
  },
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'reports',
        loadChildren: () => import('./views/reports/routes').then((m) => m.routes),
        data: {
          title: 'Reports'
        }
      },
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/routes').then((m) => m.routes),
        data: {
          title: 'Settings'
        }
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'airports',
    loadComponent: () =>
      import('./views/airports/airports.component').then(m => m.AirportsComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
