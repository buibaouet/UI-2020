import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'
import Button from '../components/button.js';
import Header from '../components/header.js';

class Login extends Component {
  render() {
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Header content = 'Đăng nhập'/>
          <Logo/>
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Email'
          />
          <TextInput
            style={styles.input}
            placeholder='Mật khẩu'
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <Button TextButton='Đăng nhập' />
          </View>
        </ImageBackground>
      </>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

var styles = StyleSheet.create({
  bg:{
    flex: 1,
  },
  container: {
        flex: 2/3,
        alignItems: 'center',
    },
    input:{
      height: 45,
      width: 0.65*DEVICE_WIDTH,
      backgroundColor: '#DDDDDD',
      borderRadius: 10,
      margin: 10,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: 16
    },
    forgot:{
      color: 'blue',
      textDecorationLine: 'underline',
      marginBottom: 15
    }
});

export default Login;
