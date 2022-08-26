import React from 'react';
import { IEntered } from '../shared/interfaces';

const EnteredContext = React.createContext<IEntered>({ entered: false, setEntered: (_value: boolean) => {} });

export const EnteredProvider = EnteredContext.Provider;
export default EnteredContext;
