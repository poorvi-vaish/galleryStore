import React from 'react';
import {useReducer} from 'react/cjs/react.production.min';
import auth from './auth';

const GlobalContext = createContext({});
const GlobalProvider = ({children}) => {
  const {authState, authDispatch} = useReducer(auth, authState);
  return <GlobalContext.Provider value={[]}>{children}</GlobalContext.Provider>;
};
