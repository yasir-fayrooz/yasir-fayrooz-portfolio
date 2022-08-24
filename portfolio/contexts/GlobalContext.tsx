import React from 'react';
import { Windows, WindowState } from '../shared/interfaces';

const GlobalContext = React.createContext<Windows>({
  terminal: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  about: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  resume: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  projects: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  skills: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  socials: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  website: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
  contact: {
    state: WindowState.Closed,
    setState: (_value: WindowState) => {},
    startbarRef: undefined,
  },
});

export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;
