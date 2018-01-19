import React from 'react';
import { Text, TextInput, View } from 'react-native';


export default class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          placeholderTextColor="#2196F3"
          onChangeText={(text) => this.setState({ text })}/>
        <Text style={{ padding: 10, fontSize: 56, width: 200 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
