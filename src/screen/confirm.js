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

class Confirm extends Component {
  constructor (props){
    super(props);
    this.state={
      id:"",
    };
  }
  confirm=()=>{
    if(this.state.id.length==0){
      Alert.alert("Vui lòng nhập mã");
    }
    else if(this.state.id.length<8){
      Alert.alert("Nhập mã xác thực bao gồm 8 ký tự");
    }
    else if(this.state.id=="uet12345"){
      this.props.navigation.navigate('MH_changePass');
    }
    else{
      Alert.alert("Mã xác thực không đúng");
    }
  }
  render() {
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <Logo/>
          <View style={styles.container}>
            <Text style={{ fontSize: 16 }}>
              Nhập vào mã xác thực đã được gửi về email đăng ký
            </Text>
            <Text style={{margin:20, fontSize:24, fontWeight:'bold'}}>Nhập mã xác thực</Text>
            <View style={{marginLeft:0.35*DEVICE_WIDTH/2, marginRight:0.35*DEVICE_WIDTH/2}}>
            <TextInput
              style={styles.input}
              placeholder='Mã xác thực'
              textAlign={'center'}
              onChangeText={(id)=>this.setState({id})}
              value={this.state.id}
              maxLength = {8}
            />
            <TouchableOpacity style={{alignItems: 'flex-end'}}>
              <Text style={styles.forgot}>Gửi lại mã</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.button} onPress={() => {this.confirm()}}>
              <Text style={styles.text}>Xác nhận</Text>
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
      fontSize: 18,
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
    },
    forgot:{
      color: 'blue',
      textDecorationLine: 'underline',
      marginBottom: 15,
      justifyContent: 'flex-end'
    },
});

export default Confirm;
