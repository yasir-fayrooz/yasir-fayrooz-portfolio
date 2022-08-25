import { ProjectDesc } from '../../shared/interfaces';
import { AIPacman, autoPTT, motorolaSWAM, noccApp, PSM, swordLife } from './project-details';

export const projectsList: ProjectDesc[] = [
  {
    key: 'project-5',
    name: 'Public Safety Management (PSM)',
    description:
      'A solution for CrimeStoppers Tasmania and future tenants to modernise crime reporting and processing online in the cloud.',
    fromDate: 'Oct 2021',
    toDate: 'Aug 2022',
    elementRef: PSM,
  },
  {
    key: 'project-4',
    name: 'Automated Radio PTT Software',
    description: 'An existing software developed in-house which i modified to suit my needs in the testing of cables.',
    fromDate: 'Sep 2021',
    toDate: 'Aug 2022',
    elementRef: autoPTT,
  },
  {
    key: 'project-3',
    name: 'NOCC Notification App + Rework',
    description: 'A legacy application written in Winforms + VBA which I eventually re-wrote and modernised',
    fromDate: 'May 2021',
    toDate: 'Aug 2022',
    elementRef: noccApp,
  },
  {
    key: 'project-2',
    name: 'Motorola SWAM (Sierra Wireless Airlink Manager)',
    description:
      'A fullstack solution to configure and apply configurations to routers seamlessly using csv documents.',
    fromDate: 'Mar 2021',
    toDate: 'Aug 2022',
    elementRef: motorolaSWAM,
  },
  {
    key: 'project-1',
    name: 'Artificial Intelligence: Pacman AI CTF Contest',
    description: 'Competition with 74 teams developing the best AI to win against eachother in the game Pacman',
    fromDate: 'Jun 2020',
    toDate: 'Oct 2020',
    elementRef: AIPacman,
  },
  {
    key: 'project-0',
    name: 'SwordLife',
    description: 'A game made in Unity with C# and released on the Google Play store',
    fromDate: 'Mar 2017',
    toDate: 'Nov 2017',
    elementRef: swordLife,
  },
];
