import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class WatchList extends React.Component {
  static navigationOptions = {
    title: 'WatchList'
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>This is your watch list!</Text>
      </View>
    );
  }
}

module.exports = connect()(WatchList);
