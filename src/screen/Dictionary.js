import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';

import volume from'../img/volume.png';
import search from'../img/search.png';

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.arrayWords = [
      {name: 'Apple'},
      {name: 'Apricot'},
      {name: 'Avocado'},
      {name: 'Banana'},
      {name: 'Blackberry'},
      {name: 'Blackcurrant'},
      {name: 'Blueberry'},
      {name: 'Boysenberry'},
      {name: 'Cherry'},
      {name: 'Coconut'},
      {name: 'Grape'},
      {name: 'Grapefruit'},
      {name: 'Kiwifruit '},
      {name: 'Lemon'},
      {name: 'Lime'},
      {name: 'Litchi'},
      {name: 'Mango'},
      {name: 'Melon'},
      {name: 'Nectarine'},
      {name: 'Orange'},
      {name: 'Papaya'},
    ];
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View style={styles.SectionStyle}>
          <Image source={search} style={styles.ImageStyle}/>
          <TextInput
                style={{flex:1, fontSize: 18}}
                placeholder='Tra từ điển Anh-Việt'
                />
          </View>
        </View>

          <View style={styles.container}>

            <View style={{flexDirection: 'row',}}>
            <Text style={{fontSize: 40}}>
              apple
            </Text>
              <Image source={volume} style={{marginLeft: 10, width: 30,resizeMode: 'contain', }} />
            </View>
            <Text style={{fontSize: 16, color:'gray', }}>noun, | ap·​ple often attributive | \’æpl\</Text>
          </View>

          <View style = {styles.explain}>
            <Text style={styles.header}>Giải nghĩa</Text>
            <Text style={styles.title}>• Danh từ</Text>
            <Text style={styles.content}>✓ Quả táo</Text>
            <Text style={styles.title}>• apple of discord</Text>
            <Text style={styles.content}>✓ mối bất hoà</Text>
            <Text style={styles.title}>• apple of the eye</Text>
            <Text style={styles.content}>✓ đồng tử, con ngươi</Text>
            <Text style={styles.content}>✓ vật quí báu phải giữ gìn nhất</Text>
            <Text style={styles.title}>• the rotten apple injures its neighbours</Text>
            <Text style={styles.content}>✓ (tục ngữ) con sâu bỏ rầu nồi canh</Text>

            <Text style={styles.header}>Đặt câu ví dụ</Text>
            <Text style={styles.content}>• He was munching on an apple.</Text>
            <Text style={styles.content}>• He took a bite out of the apple.</Text>
            <Text style={styles.content}>• The apple tree at the bottom of the garden is beginning to blossom.</Text>
            <Text style={styles.content}>• Do you have any cooking apples?</Text>

            <Text style={styles.header}>Từ liên quan: Đồng nghĩa, trái nghĩa</Text>
            <Text style={styles.content}>• angelica</Text>
            <Text style={styles.content}>• apriplum</Text>
            <Text style={styles.content}>• aprium</Text>
          </View>
      </ScrollView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

var styles = StyleSheet.create({
  container: {
    margin: 50
  },
  explain:{
    marginLeft: 20
  },
  header:{
    color: '#0288d1',
    fontSize: 22,
    margin: 10
  },
  title:{
    color: '#c83a30',
    fontSize: 18
  },
  content:{
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 30
  },
    search:{
      backgroundColor: '#EEE',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 18,
      width: DEVICE_WIDTH*0.65,
    },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 0.7*DEVICE_WIDTH,
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  ImageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default Dictionary;
