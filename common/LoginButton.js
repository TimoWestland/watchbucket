import React from 'react';
import WBButton from './WBButton';
import { StyleSheet, Alert, TouchableNativeFeedback, Platform, View, Text } from 'react-native';
import { logInWithEmailAndPassword } from '../actions';
import { connect } from 'react-redux';

export type Credentials = {
  email: string,
  password: string
};

class LoginButton extends React.Component {
  props: {
    style: any,
    credentials: Credentials,
    dispatch: (action: any) => Promise,
    onLoggedIn: ?() => void,
    onLogInError: ?() => void
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
      return (
        <WBButton
          theme="primary"
          style={[styles.button, this.props.style]}
          caption="Please wait..."
          onPress={() => {}}
        />
      );
    }

    return (
      <WBButton
        theme="primary"
        style={[styles.button, this.props.style]}
        caption="Sign in"
        onPress={() => this.logIn()}
      />
    );
  }

  async logIn() {
    const { dispatch, onLoggedIn, onLogInError } = this.props;

    this.setState({ isLoading: true });
    try {
      await Promise.all([dispatch(logInWithEmailAndPassword(this.props.credentials))]);
      onLoggedIn && onLoggedIn();
    } catch (e) {
      console.log(e);
      onLogInError && onLogInError(e);
    } finally {
      this._isMounted && this.setState({ isLoading: false });
    }
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  }
});

module.exports = connect()(LoginButton);
