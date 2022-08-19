import React from 'react';
import { WindowState } from '../shared/interfaces';

const WindowsContext = React.createContext({
  terminalState: WindowState.Closed,
  setTerminalState: (_value: WindowState) => {},
});

export const WindowsProvider = WindowsContext.Provider;
export default WindowsContext;
