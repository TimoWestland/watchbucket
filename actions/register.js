import * as firebase from 'firebase';
import { Action, ThunkAction } from './types';
import { logInWithPassword } from './login';

async function firebaseCreateUserWithPassword(email, password): Promise {
  return new Promise((resolve, reject) => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

async function _createUserWithPassword(email, password): Promise<Action> {
  const data = await firebaseCreateUserWithPassword(email, password);
  console.log(data);
  const action = {
    type: 'REGISTERED',
    data
  };
  return Promise.resolve(action);
}

function registerWithPassword({ email, password }): ThunkAction {
  return dispatch => {
    const register = _createUserWithPassword(email, password);

    register.then(result => {
      dispatch(result);
      dispatch(logInWithPassword({ email, password }));
    });

    return register;
  };
}

module.exports = { registerWithPassword };
