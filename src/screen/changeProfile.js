import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'

class changeProfile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Logo/>
          <View style={styles.container}>
            <TouchableOpacity style = {styles.button} onPress={() => navigate('MH_updateProfile')}>
              <Text style={styles.text}>Cập nhật thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => navigate('MH_changePassword')}>
              <Text style={styles.text}>Thay đổi mật khẩu</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => navigate('MH_index')}>
              <Text style={styles.text}>Đăng xuất</Text>
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
        flex: 1/2,
        alignItems: 'center',
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

export default changeProfile;
