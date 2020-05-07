import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Button extends Component {
  render(){
    const { TextButton } = this.props;
    return(
      <View style = {styles.container}>
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.text}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 15,
    },
    button: {
        backgroundColor: '#0755DA',
        height: 50,
        width: 0.5 * DEVICE_WIDTH,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});
