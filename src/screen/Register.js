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
import Header from '../components/header.js';

class Register extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Header content = 'Đăng ký'/>
          <Logo/>
          <View style={styles.container}>
          <TextInput
            style={styles.input} placeholder='Họ tên'
          />
          <TextInput
            style={styles.input} placeholder='Email'
          />
          <TextInput
            style={styles.input} placeholder='Tên đăng nhập'
          />
          <TextInput
            style={styles.input}
            placeholder='Mật khẩu'
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder='Nhập lại mật khẩu'
            secureTextEntry={true}
          />
          <TouchableOpacity style = {styles.button} onPress={() => navigate('MH_index')}>
            <Text style={styles.text}>Đăng ký</Text>
          </TouchableOpacity>
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
    button: {
        backgroundColor: '#0755DA',
        height: 50,
        width: 0.5 * DEVICE_WIDTH,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});

export default Register;
