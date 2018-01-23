import React from 'react';
import WBButton from './WBButton';
import { StyleSheet, Alert, Keyboard } from 'react-native';
import { logInWithPassword } from '../actions/login';
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

  // TODO: build proper error handling and validation
  async logIn() {
    Keyboard.dismiss();
    const { dispatch, onLoggedIn } = this.props;

    this.setState({ isLoading: true });
    try {
      await Promise.all([dispatch(logInWithPassword(this.props.credentials))]);
    } catch (e) {
      const message = e.message || e;
      Alert.alert(message);
      return;
    } finally {
      this._isMounted && this.setState({ isLoading: false });
    }

    onLoggedIn && onLoggedIn();
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  }
});

export default connect()(LoginButton);
