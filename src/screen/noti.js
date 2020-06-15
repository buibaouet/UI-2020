import React, { Component } from 'react';
import { View, Text, FlatList } from "react-native";
import {List} from 'native-base';
import { ListItem } from 'react-native-elements';
const data = [
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 1 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 2 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 3 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 4 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 5 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 6 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 10 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 7 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 8 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 9 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 11 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
  {
      title: 'Bạn có thông báo mới',
      Des: 'Bài thi số 12 vừa được cập nhật, bạn có thể làm ngay bây giờ',
  },
];

export default class noti extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <List>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.title}
              subtitle={item.Des}
              leftAvatar = {{source: require('../img/notification.png')}}
              bottomDivider
              onPress={() => navigate('MH_ListTest')}
            />
          )}
        />
      </List>
    );
  }
}