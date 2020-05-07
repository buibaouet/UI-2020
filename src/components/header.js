import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class header extends Component{
  render(){
    const { content } = this.props;
    return(
      <View
          style={{
            height: 50,
            backgroundColor: '#DDDDDD',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 22,
            }}>
            {content}
          </Text>
        </View>
    );
  }
}
