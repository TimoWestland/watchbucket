import React from 'react';
import {
  Image,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import LoginButton from '../common/LoginButton';

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
      <View style={styles.container}>
        <StatusBar barStyle="default"/>
        <Text style={styles.header}>WatchBucket</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <LoginButton credentials={{ email, password }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a8a8a',
    paddingTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },

  header: {
    fontSize: 40,
    color: 'white',
  },

  form: {
    marginTop: 30,
  },

  input: {
    fontSize: 18,
    borderColor: 'white',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
});

module.exports = connect()(LoginScreen);
