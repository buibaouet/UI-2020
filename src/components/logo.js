import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import logoImg from'../img/Logo.png';

export default class logo extends Component{
  render(){
    return(
        <View style={styles.container}>
          <Image source={logoImg} style={styles.image} />
          <Text style={styles.text}>UET-Eng</Text>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
        flex: 1/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
});
