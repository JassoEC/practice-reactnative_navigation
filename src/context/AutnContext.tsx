import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

export interface AuthContexProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavIcon: (payload: string) => void;
  setUserName: (payload: string) => void;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

export const AuthContext = createContext({} as AuthContexProps);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({type: 'signIn'});

  const signOut = () => dispatch({type: 'signOut'});

  const changeFavIcon = (payload: string) =>
    dispatch({type: 'setFavoriteIcon', payload});

  const setUserName = (payload: string) =>
    dispatch({type: 'setUserName', payload});

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavIcon,
        signOut,
        setUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
