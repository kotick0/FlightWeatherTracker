import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'REPORTS'
  },
  {
    name: 'METAR',
    url: '/reports/metar',
    iconComponent: { name: 'cil-cloud-download' }
  },
  {
    name: 'TAF',
    url: '/reports/taf',
    iconComponent: { name: 'cil-sun' }
  },
  {
    name: 'SIGMET',
    url: '/reports/sigmet',
    iconComponent: { name: 'cil-report-slash' }
  },
  {
    title: true,
    name: 'SETTINGS'
  },
  {
    name: 'Airports',
    url: '/settings/airports',
    iconComponent: { name: 'cil-location-pin' }
  },
  {
    name: 'Thresholds',
    url: '/settings/thresholds',
    iconComponent: { name: 'cil-options' }
  }
];
