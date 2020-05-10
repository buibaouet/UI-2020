import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'

class Login extends Component {
  constructor (props){
    super(props);
    this.state={
      username:"",
      pass:"" ,
    };
  }
  sign=()=>{
    if(this.state.username.length==0||this.state.pass.length==0){
      Alert.alert("Vui lòng nhập tài khoản và mật khẩu!");
    }
    else if(this.state.pass=="12345678"&&this.state.username=="nhom8ui"){
      this.props.navigation.navigate('MH_Home');
    }
    else{
      Alert.alert("Tài khoản hoặc mật khẩu không đúng");
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Logo/>
          <View style={styles.container}>
          <View style={{marginLeft:0.35*DEVICE_WIDTH/2, marginRight:0.35*DEVICE_WIDTH/2}}>
            <TextInput
              style={styles.input}
              placeholder='Tên đăng nhập'
              onChangeText={(username)=>this.setState({username})}
              value={this.state.username}
            />
            <TextInput
              style={styles.input}
              placeholder='Mật khẩu'
              secureTextEntry={true}
              onChangeText={(pass)=>this.setState({pass})}
              value={this.state.pass}
            />
            <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => navigate('MH_forgetPass')}>
              <Text style={styles.forgot}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style = {styles.button} onPress={() => {this.sign()}}>
            <Text style={styles.text}>Đăng nhập</Text>
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
      marginBottom: 10,
      marginTop: 10,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: 16
    },
    button: {
        backgroundColor: '#0755DA',
        height: 50,
        width: 0.4 * DEVICE_WIDTH,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    forgot:{
      color: 'blue',
      textDecorationLine: 'underline',
      marginBottom: 15
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});

export default Login;
