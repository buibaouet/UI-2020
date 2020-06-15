import React, { Component } from 'react';
import { View, Text, FlatList } from "react-native";
import {List} from 'native-base';
import { ListItem } from 'react-native-elements';
const data = [
  {
      Des: 'Bài thi 1',
  },
  {
      Des: 'Bài thi 2',
  },
  {
      Des: 'Bài thi 3',
  },
  {
      Des: 'Bài thi 4',
  },
  {
      Des: 'Bài thi 5',
  },
  {
      Des: 'Bài thi 6',
  },
  {
      Des: 'Bài thi 7',
  },
  {
      Des: 'Bài thi 8',
  },
  {
      Des: 'Bài thi 9',
  },
  {
      Des: 'Bài thi 10',
  },
  {
      Des: 'Bài thi 11',
  },
  {
      Des: 'Bài thi 12',
  },
];

export default class ListTest extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <List>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.Des}
              leftAvatar = {{source: require('../img/vocab.png')}}
              bottomDivider
              onPress={() => navigate('MH_Test',item.Des)}
            />
          )}
        />
      </List>
    );
  }
}