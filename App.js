import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import FlatListBasics from './app/components/FlatListBasics';
import Movies from './app/components/Movies';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.sectionData = [
      { title: 'D', data: ['Devin'] },
      { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Movies />
        {/*<FlatListBasics sections={this.sectionData}/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red',
  }
});
