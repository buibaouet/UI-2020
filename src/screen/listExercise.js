import React, { Component } from 'react';
import { View, Text, FlatList } from "react-native";
import {List} from 'native-base';
import { ListItem } from 'react-native-elements';
const data = [
  {
      Des: 'Bài tập 1',
  },
  {
      Des: 'Bài tập 2',
  },
  {
      Des: 'Bài tập 3',
  },
  {
      Des: 'Bài tập 4',
  },
  {
      Des: 'Bài tập 5',
  },
  {
      Des: 'Bài tập 6',
  },
  {
      Des: 'Bài tập 7',
  },
  {
      Des: 'Bài tập 8',
  },
  {
      Des: 'Bài tập 9',
  },
  {
      Des: 'Bài tập 10',
  },
  {
      Des: 'Bài tập 11',
  },
  {
      Des: 'Bài tập 12',
  },
];

export default class ListExercise extends Component {
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
              onPress={() => navigate('MH_Test',item.Des)}
            />
          )}
        />
      </List>
    );
  }
}