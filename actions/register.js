import * as firebase from 'firebase';
import { Platform, ActionSheetIOS, Alert } from 'react-native';
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

      if (Platform.OS === 'ios') {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            title: 'Your account was created!',
            options: ['Sign in', 'Cancel'],
            destructiveButtonIndex: 0,
            cancelButtonIndex: 1
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              dispatch(logInWithPassword({ email, password }));
            }
          }
        );
      } else {
        Alert.alert('Your account was created!', 'Do you want to sign in?', [
          { text: 'Cancel' },
          { text: 'Sign in', onPress: () => dispatch(logInWithPassword({ email, password })) }
        ]);
      }
    }).catch((e) => console.log(e));

    return register;
  };
}

export { registerWithPassword };
