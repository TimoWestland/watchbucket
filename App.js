import React from 'react';
import WBNavigator from './WBNavigator';
import * as firebase from 'firebase';
import { configureStore } from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { firebaseConfig } from './env';

firebase.initializeApp(firebaseConfig);

const { persistor, store } = configureStore();

class App extends React.Component {
  // Todo: abstract app and root
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}>
          <WBNavigator/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

