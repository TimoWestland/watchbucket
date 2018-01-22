import React from 'react';
import WBColors from '../common/WBColors';
import LoginButton from '../common/LoginButton';
import {
  Image,
  Button,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';

// Constants
const WINDOW_WIDTH = Dimensions.get('window').width;


class LoginScreen extends React.Component {
  state: {
    email: string,
    password: string
  };
  props: {
    navigation: Object
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { navigation } = this.props;
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
            <View style={[styles.formControl, { marginBottom: 25 }]}>
              <Image style={styles.icon} source={require('../common/img/icon-user.png')}/>
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
              <Image style={styles.icon} source={require('../common/img/icon-lock.png')}/>
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
          <LoginButton
            style={styles.submit}
            credentials={{ email, password }}
          />
          {/*TMP, REMOVE LATER!*/}
          <Button
            title="Go to WatchList"
            onPress={() => navigation.dispatch({ type: 'NAVIGATE', route: 'WatchList' })}
          />

        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink}>Sign up.</Text></Text>
        </View>
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
    alignItems: 'center',
  },
  logo: {
    width: (WINDOW_WIDTH - 40),
    height: ((WINDOW_WIDTH - 35) / 2),
  },

  form: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  formControl: {
    position: 'relative',
    paddingHorizontal: 8,
    paddingLeft: 35,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  icon: {
    position: 'absolute',
    height: 21,
    left: 2,
    bottom: 0,
    top: 11,
    margin: 'auto',
    opacity: .8,
  },
  input: {
    paddingVertical: 8,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18,
  },

  submit: {
    width: (WINDOW_WIDTH - 80),
    marginTop: 40,
    marginBottom: 20,
  },

  footer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
  footerText: {
    color: WBColors.colorWithAlpha('white', .6),
    fontSize: 15,
    letterSpacing: .2,
    textAlign: 'center',
  },
  footerLink: {
    color: WBColors.white,
    fontWeight: '500',
    fontSize: 15,
    letterSpacing: .2,
    textAlign: 'center',
  }

});

module.exports = connect()(LoginScreen);
