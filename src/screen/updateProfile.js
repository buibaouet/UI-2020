import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'

class updateProfile extends Component {
  constructor (props){
    super(props);
    this.state={
      name:"",
      username:"",
      email:"",
      phone:"",
    };
  }

  updateProfile=()=>{
    const expression =/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const regex = /^[0-9\b]+$/;
    if(this.state.name.length==0||this.state.email.length==0||this.state.phone.length==0){
      Alert.alert("Vui lòng điền đầy đủ thông tin");
    }
    else if(expression.test(String(this.state.email).toLowerCase())==false){
      Alert.alert("Email không hợp lệ");
    }
    else if (regex.test(String(this.state.phone)) == false) {
        Alert.alert("Số điện thoại không hợp lệ");
    }
    else {
      Alert.alert("Cập nhật tài khoản thành công");
      this.props.navigation.navigate('MH_changeProfile');
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <>

          <ImageBackground style={styles.bg} source={bgImg}>
            <Logo/>
            <View style={styles.container}>
            <TextInput
              style={styles.input} placeholder='Họ tên'
              onChangeText={(name)=>this.setState({name})}
              value={this.state.name}
            />
            <TextInput
              style={styles.input} placeholder='Email'
              onChangeText={(email)=>this.setState({email})}
              value={this.state.email}
            />
            <TextInput
              style={styles.input} placeholder='Số điện thoại'
              onChangeText={(phone)=>this.setState({phone})}
              value={this.state.phone}
            />
            <TouchableOpacity style = {styles.button} onPress={() => {this.updateProfile()}}>
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
      margin: 10,
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

export default updateProfile;
