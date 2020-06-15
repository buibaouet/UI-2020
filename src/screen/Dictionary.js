import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

import volume from'../img/volume.png';

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.arrayWords = [
      'Apple',
      'Apricot',
      'Avocado',
      'Banana',
      'Blackberry',
      'Blackcurrant',
      'Blueberry',
      'Boysenberry',
      'Cherry',
      'Coconut',
      'Grape',
      'Grapefruit',
      'Kiwifruit ',
      'Lemon',
      'Lime',
      'Litchi',
      'Mango',
      'Melon',
      'Nectarine',
      'Orange',
      'Papaya',
    ];
  }

  SearchFilterFunction(text) {
      const newData = this.arrayWords.filter(function(item) {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        dataSource: newData,
        text: text,
      });
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
            <View style={{  alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20
            }}>
              <TextInput
                style={styles.search}
                placeholder='Tra từ điển Anh-Việt'
                onChangeText={text => this.SearchFilterFunction(text)}
              />
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

  textStyle: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#FFFFCC',
    borderBottomWidth: 1
  },
  FlatList_Item: {
    height: DEVICE_HEIGHT/3,
    marginRight: 60,
    marginLeft: 60
},
});

export default Dictionary;
