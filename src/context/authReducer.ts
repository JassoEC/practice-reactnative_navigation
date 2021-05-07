import {AuthState} from './AutnContext';

type AuthActionTypes =
  | {type: 'signIn'}
  | {type: 'signOut'}
  | {type: 'setFavoriteIcon'; payload: string}
  | {type: 'setUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-user-name-yet',
      };
    case 'setFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'setUserName':
      return {
        ...state,
        userName: action.payload,
      };
    case 'signOut':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };
    default:
      return state;
  }
};
