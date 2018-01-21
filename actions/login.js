import * as firebase from 'firebase';

import { Action, ThunkAction } from './types';

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

async function _logInWithPassword(email, password): Promise<Action> {
  // let action = {};
  const data = await firebaseEmailPasswordLogin(email, password);

  const action = {
    type: 'LOGGED_IN',
    data
  };
  return Promise.resolve(action);
}

function logInWithPassword({ email, password }): ThunkAction {
  return dispatch => {
    const login = _logInWithPassword(email, password);

    login.then(result => {
      dispatch(result);
      // Add more dispatches here so the login process isn't blocked by them
    }).catch(e => console.log(e));

    return login;
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

module.exports = { logInWithPassword, logOut };
