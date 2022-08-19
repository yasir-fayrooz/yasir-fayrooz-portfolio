import React from 'react';
import { WindowState } from '../shared/interfaces';

const GlobalContext = React.createContext({
  windowState: WindowState.Closed,
  setWindowState: (_value: WindowState) => {},
});

export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;
