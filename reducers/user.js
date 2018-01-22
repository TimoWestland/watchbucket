import type { Action } from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  id: string,
  name: string,
  emailVerified: boolean,
}

const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
  emailVerified: false,
};

function user(state: State = initialState, action: Action): State {
  switch(action.type) {
    case 'LOGGED_IN':
      let { uid, displayName } = action.data;
      return {
        isLoggedIn: true,
        id: uid,
        name: displayName
      };

    case 'LOGGED_OUT':
      return initialState;

    case 'REGISTERED':
      return {
        ...initialState,
        emailVerified: action.data.emailVerified
      }
  }
  return state;
}

export default user;
