import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'

class Confirm extends Component {
  render() {
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Logo/>
          <View style={styles.container}>
            <Text>Thay đổi mật khẩu</Text>
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
        flex: 2/3,
        alignItems: 'center',
    },
});

export default Confirm;