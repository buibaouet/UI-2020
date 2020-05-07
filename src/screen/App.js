import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'
import Button from '../components/button.js';
import Header from '../components/header.js';

class App extends Component {
  render() {
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Logo/>
          <View style={styles.container}>
          <Button TextButton='Đăng nhập' />
          <Button TextButton='Đăng ký' />
          </View>
        </ImageBackground>
      </>
    );
  }
}

var styles = StyleSheet.create({
  bg:{
    flex: 1,
  },
  container: {
        flex: 1/2,
        alignItems: 'center',
    },
});

export default App;
