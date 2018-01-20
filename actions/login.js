import * as firebase from 'firebase';

import { Action, ThunkAction } from './types';

// todo: create logout with prompt
// todo: create fb login
// todo: create google login

async function firebaseEmailPasswordLogin(email, password): Promise {
  return new Promise((resolve, reject) => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => resolve(res))
      .catch((error) => reject(error.toString()));
  });
}

async function _logInWithEmailAndPassword(email, password): Promise<Action> {
  let action = {};

  try {
    const data = await firebaseEmailPasswordLogin(email, password);
    action = {
      type: 'LOGIN_SUCCESS',
      data
    };
  } catch (error) {
    action = {
      type: 'LOGIN_FAIL',
      error
    };
  }
  return Promise.resolve(action);
}

function logInWithEmailAndPassword({ email, password }): ThunkAction {
  return dispatch => {
    const login = _logInWithEmailAndPassword(email, password);

    login.then(result => {
      dispatch(result);
      // Add more dispatches here so the login process isn't blocked by them
    });
  };
}

function logOut(): ThunkAction {
  return dispatch => {
    firebase.auth().signOut();

    return dispatch({
      type: 'LOGGED_OUT'
    });
  };
}

module.exports = { logInWithEmailAndPassword, logOut };
