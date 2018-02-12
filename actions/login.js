import * as firebase from 'firebase';
import { Action, ThunkAction } from './types';

/**
 * Email + password login
 */
async function firebaseEmailPasswordLogin(email, password): Promise {
  return new Promise((resolve, reject) => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => resolve(res))
      .catch((error) => reject(error.toString()));
  });
}

async function _logInWithPassword(email, password): Promise<Action> {
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
      dispatch({ type: 'NAVIGATE', route: 'WatchList' });
    }).catch(err => console.log(err));

    return login;
  };
}

/**
 * Facebook login
 */
const provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('email, public_profile');

async function firebaseFacebookLogin() {
  return new Promise((resolve, reject) => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((res) => resolve(res))
      .catch((error) => reject(error.toString()));
  });
}

async function _logInWithFacebook(): Promise<Action> {
  const data = await firebaseFacebookLogin();

  const action = {
    type: 'LOGGED_IN',
    data
  };
  return Promise.resolve(action);
}

function logInWithFacebook(): ThunkAction {
  return dispatch => {
    const login = _logInWithFacebook();

    login.then(result => {
      dispatch(result);
      dispatch({ type: 'NAVIGATE', route: 'WatchList' });
    }).catch(err => console.log(err));

    return login;
  }
}


/**
 * Logout
 */
function logOut(): ThunkAction {
  return dispatch => {
    firebase.auth().signOut();

    return dispatch({
      type: 'LOGGED_OUT'
    });
  };
}

export {
  logInWithPassword,
  logInWithFacebook,
  logOut,
};
