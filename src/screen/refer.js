import React, { Component } from 'react';
import { View, Text, FlatList, Linking } from "react-native";
import {List} from 'native-base';
import { ListItem } from 'react-native-elements';
const data = [
  {
      title: 'Google dịch',
      Des: 'Dịch vụ miễn phí của Google dịch nhanh các từ, cụm từ và trang web giữa tiếng Việt và hơn 100 ngôn ngữ khác ',
      img: require('../img/unnamed.png'),
      link: 'https://translate.google.com.vn/',
  },
  {
      title: 'The Grammarly Keyboard ',
      Des: 'The Grammarly Keyboard đảm bảo bài viết của bạn luôn trông tuyệt vời',
      img: require('../img/g.png'),
      link: 'https://www.grammarly.com/',
  },
  {
      title: 'TED-Ed',
      Des: 'TED - Ed cam kết tạo ra những bài học đáng để chia sẻ là một phần mở rộng của sứ mệnh TED lan truyền những ý tưởng tuyệt vời',
      img: require('../img/unnamed.jpg'),
      link: 'https://www.youtube.com/TEDEducation',
  },
  {
      title: 'Duolingo',
      Des: 'Duolingo là một nền tảng học ngôn ngữ miễn phí và dịch văn bản dựa trên "crowdsourcing"',
      img: require('../img/duo.png'),
      link: 'https://vi.duolingo.com/',
  },

];

export default class refer extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
    <>
    <Text></Text>
    <Text style={{fontSize:24, fontWeight:'bold', marginLeft: 20}}>Các trang tham khảo về tiếng Anh:</Text>
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
