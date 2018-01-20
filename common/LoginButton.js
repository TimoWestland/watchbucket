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
          <Text style={styles.buttonText}>SIGN IN</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  async logIn() {
    const { dispatch, onLoggedIn } = this.props;
    console.log('pressed log in');
    console.log(this.props.credentials);

    this.setState({ isLoading: true });
    try {
      await Promise.all([dispatch(logInWithEmailAndPassword(this.props.credentials))]);
    } catch (e) {
      console.log(e);
    } finally {
      this._isMounted && this.setState({ isLoading: false });
    }

    onLoggedIn && onLoggedIn();
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
  },
  buttonText: {
    padding: 20,
    color: 'white',
    textAlign: 'center',
  }
});

module.exports = connect()(LoginButton);
