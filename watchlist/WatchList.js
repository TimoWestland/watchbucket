import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class WatchList extends React.Component {
  static navigationOptions = {
    title: 'Your Watchlist',
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is your watchlist!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 30
  }
});

export default connect()(WatchList);
