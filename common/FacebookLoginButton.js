import React from 'react';
import WBButton from './WBButton';
import { StyleSheet, Alert, Keyboard } from 'react-native';
import { logInWithFacebook } from '../actions/login';
import { connect } from 'react-redux';


class FacebookLoginButton extends React.Component {
  props: {
    style: any,
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
          theme="facebook"
          style={[styles.button, this.props.style]}
          icon={require('./img/buttons/icon-facebook.png')}
          caption="Please wait..."
          onPress={() => {}}
        />
      );
    }

    return (
      <WBButton
        theme="facebook"
        style={[styles.button, this.props.style]}
        icon={require('./img/buttons/icon-facebook.png')}
        caption="Sign in with Facebook"
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
      await Promise.all([dispatch(logInWithFacebook())]);
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

export default connect()(FacebookLoginButton);
