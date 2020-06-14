import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bgImg from'../img/wallpaper.jpg';
import Logo from '../components/logo.js'

class noti extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.box} onPress={() => navigate('')}>
              <Text style={styles.textbox}>Thông báo linh tinh</Text>
            </TouchableOpacity>
            </ScrollView>
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
  box:{
    backgroundColor: '#F5F5DC',
    height: 100,
    width: 0.85 * DEVICE_WIDTH,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  container: {
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
    textbox:{
        color: 'black',
        fontSize: 18
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});

export default noti;
