import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import * as firebase from 'firebase';
import { firebaseConfig } from './env';

import configureStore from './store/configureStore';
import LoginScreen from './login/LoginScreen';

firebase.initializeApp(firebaseConfig);

const store = configureStore();

class App extends React.Component {
  state: {
    isLoading: boolean,
    store: any
  };

  constructor() {
    super();
    this.state = {
      storeCreated: false,
      store: {}
    };
  }

  componentDidMount() {
    // configureStore()
    //   .then(
    //     store => this.setState({ store, storeCreated: true })
    //   );
    //
    // console.log(this.state.store);
  }

  render() {
    return (
      // Todo: abstract app and root
      <Provider store={store}>
        <LoginScreen/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn
  };
}

module.exports = App;

