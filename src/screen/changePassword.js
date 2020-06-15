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

class changePassword extends Component {
  constructor (props){
    super(props);
    this.state={
        oldpass:"",
        pass:"" ,
        repass:"",
    };
  }

  confirm=()=>{
    if(this.state.pass.length==0){
      Alert.alert("Vui lòng điền mật khẩu");
    }
    else if(this.state.pass.length < 8 || this.state.pass.length > 14){
      Alert.alert("Mật khẩu phải bao gồm 8-14 ký tự");
    }
    else if(this.state.pass!=this.state.repass){
      Alert.alert("Mật khẩu không khớp");
    }
    else {
      Alert.alert("Thay đổi mật khẩu thành công");
      this.props.navigation.navigate('MH_Home');
    }
  }

  render() {
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
        <Logo/>
          <View style={styles.container}>
            <Text style={{fontSize:24, fontWeight:'bold', textAlign:'center'}}>Nhập mật khẩu cũ:</Text>
            <View style={styles.align}>
              <TextInput
                style={styles.input}
                placeholder='Mật khẩu'
                secureTextEntry={true}
                onChangeText={(oldpass)=>this.setState({oldpass})}
                value={this.state.oldpass}
              />
            </View>
            <Text style={{fontSize:24, fontWeight:'bold', textAlign:'center'}}>Tạo mật khẩu mới:</Text>
            <View style={styles.align}>
              <TextInput
                style={styles.input}
                placeholder='Mật khẩu'
                secureTextEntry={true}
                onChangeText={(pass)=>this.setState({pass})}
                value={this.state.pass}
              />
            </View>
            <Text style={{fontSize:24, fontWeight:'bold', textAlign:'center'}}>Nhập lại mật khẩu:</Text>
            <View style={styles.align}>
              <TextInput
                style={styles.input}
                placeholder='Nhập lại mật khẩu'
                secureTextEntry={true}
                onChangeText={(repass)=>this.setState({repass})}
                value={this.state.repass}
              />

            <TouchableOpacity style = {styles.button} onPress={() => {this.confirm()}}>
              <Text style={styles.text}>Xác nhận</Text>
            </TouchableOpacity>
            </View>
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
        margin: 30,
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
    },
    align:{
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default changePassword;
