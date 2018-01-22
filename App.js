import React from 'react';
import WBNavigator from './WBNavigator';
import configureStore from './store/configureStore';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { firebaseConfig } from './env';

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  store = configureStore();

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

  render() {
    return (
      // Todo: abstract app and root
      <Provider store={this.store}>
        <WBNavigator/>
      </Provider>
    );
  }
}

export default App;

