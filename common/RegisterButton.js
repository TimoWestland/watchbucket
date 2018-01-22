import React from 'react';
import WBButton from './WBButton';
import { StyleSheet, Alert, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { registerWithPassword } from '../actions/register';

import type { Credentials } from './LoginButton';

class RegisterButton extends React.Component {
  props: {
    style: any,
    credentials: Credentials,
    dispatch: (action: any) => Promise,
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
          theme="secondary"
          style={[styles.button, this.props.style]}
          caption="Please wait..."
          onPress={() => {}}
        />
      );
    }

    return (
      <WBButton
        theme="secondary"
        style={[styles.button, this.props.style]}
        caption="Sign up"
        onPress={() => this.register()}
      />
    );
  }

  // TODO: build proper error handling and validation
  async register() {
    Keyboard.dismiss();
    const { dispatch } = this.props;

    this.setState({ isLoading: true });
    try {
      await Promise.all([dispatch(registerWithPassword(this.props.credentials))]);
    } catch (e) {
      const message = e.message || e;
      Alert.alert(message);
      return;
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

export default connect()(RegisterButton);
