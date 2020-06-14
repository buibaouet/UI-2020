import React, { Component } from 'react';
import { View, Text, FlatList } from "react-native";
import {List} from 'native-base';
import { ListItem } from 'react-native-elements';
const data = [
  {
      Des: 'Từ vựng',
  },
  {
      Des: 'Câu trực tiếp',
  },
  {
      Des: 'Câu bị động',
  },
  {
      Des: 'Câu điều kiện',
  },
  {
      Des: 'Các thì',
  },
];

export default class TestKind extends Component {
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
              bottomDivider
              onPress={() => navigate('MH_ListTest')}
            />
          )}
        />
      </List>
    );
  }
}