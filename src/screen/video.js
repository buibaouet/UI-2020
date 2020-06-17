import React, { Component } from 'react';
import { View, Text, FlatList, Linking } from "react-native";
import {List} from 'native-base';
import { ListItem } from 'react-native-elements';
const data = [
  {
      title: 'Bài 1',
      Des: 'Danh từ và đại từ',
      img: require('../img/youtube.png'),
      link: 'https://www.youtube.com/watch?v=G26kkqg2fHQ&list=PLoCMsFInB0OyRnOeSP41o1mV9fVFGKFRq&index=2&t=3s',
  },
  {
      title: 'Bài 2',
      Des: 'Mạo Từ',
      img: require('../img/youtube.png'),
      link: 'https://www.youtube.com/watch?v=4LATq-VoiWw&list=PLoCMsFInB0OyRnOeSP41o1mV9fVFGKFRq&index=3&t=0s',
  },
  {
      title: 'Bài 3',
      Des: 'Cụm Danh Từ (Tiết 1)',
      img: require('../img/youtube.png'),
      link: 'https://www.youtube.com/watch?v=WDgW3R2tguo&list=PLoCMsFInB0OyRnOeSP41o1mV9fVFGKFRq&index=4&t=0s',
  },
  {
      title: 'Bài 4',
      Des: 'Cụm danh từ Tiết 2',
      img: require('../img/youtube.png'),
      link: 'https://www.youtube.com/watch?v=ZvOcrKEOIpU&list=PLoCMsFInB0OyRnOeSP41o1mV9fVFGKFRq&index=5&t=0s',
  },

];

export default class video extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
    <>
    <Text></Text>
    <Text style={{fontSize:24, fontWeight:'bold', marginLeft: 20}}>Bài giảng Tiếng Anh:</Text>
    <Text></Text>
      <List>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.title}
              subtitle={item.Des}
              leftAvatar = {{source: item.img}}
              bottomDivider
              onPress={() => Linking.openURL(item.link)}
            />
          )}
        />
      </List>
      </>
    );
  }
}
