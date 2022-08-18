import React from 'react';
import { WindowState } from '../shared/interfaces';

interface IGlobalContext {
  terminalState: WindowState;
  setTerminalState: (_value: WindowState) => {};
}

const GlobalContext = React.createContext({
  terminalState: WindowState.Closed,
  setTerminalState: (_value: WindowState) => {},
});

export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;
