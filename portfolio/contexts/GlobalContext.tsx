import React from 'react';
import { Windows, WindowState } from '../shared/interfaces';

const GlobalContext = React.createContext({
  windowStates: {
    terminal: WindowState.Closed,
    about: WindowState.Closed,
    resume: WindowState.Closed,
    projects: [],
    skills: WindowState.Closed,
    socials: WindowState.Closed,
    website: WindowState.Closed,
    contact: WindowState.Closed,
  } as Windows,
  setWindowsStates: (_value: Windows) => {},
});

export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;
