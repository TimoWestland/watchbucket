import React from 'react';
import { StyleSheet, Alert, TouchableNativeFeedback, Platform, View, Text } from 'react-native';
import { logInWithEmailAndPassword } from '../actions';
import { connect } from 'react-redux';

export type Credentials = {
  email: string,
  password: string
};

class LoginButton extends React.Component {
  props: {
    credentials: Credentials,
    dispatch: (action: any) => Promise,
    onLoggedIn: ?() => void
  };
  state: {
    isLoading: boolean
  };
  _isMounted: boolean;

  constructor() {
    super();
    this.state = { isLoading: false };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.isLoading) {
      // todo: abstract to button components
      return (
        <TouchableNativeFeedback
          onPress={() => {}}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Please wait...</Text>
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableNativeFeedback
        onPress={() => this.logIn()}
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  async logIn() {
    console.log('pressed log in');
    console.log(this.props.credentials);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 4,
  },
  buttonText: {
    padding: 20,
    color: 'white',
  }
});

module.exports = connect()(LoginButton);
