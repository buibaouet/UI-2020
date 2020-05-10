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

class ForgetPass extends Component {

  constructor (props){
    super(props);
    this.state={
      email:"",
    };
  }
  emailConfirm=()=>{
    const expression =/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if(this.state.email.length==0){
      Alert.alert("Vui lòng nhập email");
    }
    else if(expression.test(String(this.state.email).toLowerCase())==false){
      Alert.alert("Email không hợp lệ");
    }
    else if(this.state.email=="nhom8ui@gmail.com"){
      this.props.navigation.navigate('MH_confirmEmail');
    }
    else{
      Alert.alert("Email không đúng");
    }
  }
  render() {
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Logo/>
          <View style={styles.container}>
            <Text style={{ fontSize: 16, margin: 15 }}>
              Nhập vào email đã đăng ký tài khoản trước đó. Hệ thống sẽ gửi tin nhắn chứa mã xác nhận để xác thực tài khoản của bạn!
            </Text>
            <Text style={{margin:20, fontSize:24, fontWeight:'bold'}}>Nhập email đăng ký</Text>
            <TextInput
              style={styles.input}
              placeholder='Email'
              onChangeText={(email)=>this.setState({email})}
              value={this.state.email}
            />
            <TouchableOpacity style = {styles.button} onPress={() => {this.emailConfirm()}}>
              <Text style={styles.text}>Tiếp tục</Text>
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
      marginTop: 20,
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
    text: {
        color: 'white',
        fontSize: 18
    }
});

export default ForgetPass;
