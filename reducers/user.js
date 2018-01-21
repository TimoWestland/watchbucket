import type { Action } from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  id: string,
  name: string,
}

const initialState = {
  isLoggedIn: false,
  id: null,
  name: null,
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
  }
  return state;
}

module.exports = user;
