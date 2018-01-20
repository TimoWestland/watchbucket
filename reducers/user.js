import type { Action } from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  data: ?any;
  error: ?string;
}

const initialState = {
  isLoggedIn: false,
  data: null,
  error: null,
};

function user(state: State = initialState, action: Action): State {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true,
        data: action.data
      };

    case 'LOGIN_FAIL':
      return {
        ...initialState,
        error: action.error
      };

    case 'LOGGED_OUT':
      return initialState;
  }
  return state;
}

module.exports = user;
