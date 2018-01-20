import React from 'react';
import {
  Image,
  StatusBar,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginButton from '../common/LoginButton';

// Constants
const LOGIN_BTN_HEIGHT = 40,
  WINDOW_WIDTH = Dimensions.get('window').width,
  WINDOW_HEIGHT = Dimensions.get('window').height;


class LoginScreen extends React.Component {
  state: {
    email: string,
    password: string
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;

    return (

      <ImageBackground style={styles.container} source={require('./img/bg-login.png')}>
        <KeyboardAvoidingView style={styles.scrollContainer} behavior="position">
          <Image
            resizeMode="cover"
            style={styles.logo}
            source={require('../common/img/logo.png')}
          />
          <View style={styles.form}>
            <View style={[styles.formControl]}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="E-mail"
                placeholderTextColor="rgba(255,255,255,0.8)"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.formControl}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.8)"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="send"
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
          </View>
          <LoginButton style={styles.submit} credentials={{ email, password }}/>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: (WINDOW_WIDTH - 40),
    height: ((WINDOW_WIDTH - 35) / 2)
  },

  form: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  formControl: {
    marginBottom: 20,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  input: {
    paddingVertical: 8,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 20,
  },
  submit: {
    marginTop: 60,
    width: (WINDOW_WIDTH - 80),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});

module.exports = connect()(LoginScreen);
