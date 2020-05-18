import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V34 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Bài 4: Thích và không thích
                </Text>
                <Text>
                
                ✓ I like summer best = Tôi thích mùa hè nhất{'\n'}
                ✓ I love going fishing = Tôi thích đi câu cá{'\n'}
                ✓ He’s a swimming lover = Anh ấy là người rất thích bơi.{'\n'}
                ✓ I enjoy listening to classical music = Tôi thích nghe nhạc cổ điển{'\n'}
                ✓ I’m interested in video games = Tôi rất thích chơi điện tử.{'\n'}
                ✓ They are my choice =  Đó là sự lựa chọn của tôi.{'\n'}
                ✓ I prefer the Daewoo Hotel =  Tôi thích khách sạn Daewoo hơn.{'\n'}
                ✓  I prefer French to English = Tôi thích tiếng Pháp hơn tiếng Anh.{'\n'}
                ✓ I like Spanish better =  Tôi thích tiếng Tây Ban Nha hơn.{'\n'}
                ✓ I like both of them = Tôi thích cả hai{'\n'}
                ✓ She dislikes driving = Cô ấy không thích lái xe.{'\n'}
                ✓ I don’t like eating fish =  Tôi không thích ăn cá.{'\n'}
                ✓ I hate swimming = Tôi ghét bơi.{'\n'}
                ✓ I’m tires of endless homework = Tôi mệt mỏi vì quá nhiều bài tập về nhà.{'\n'}
                ✓ I’m not interested in this kind of film = Tôi không thích thể loại phim này.{'\n'}
                ✓ I like neither of them =  Tôi không thích cả hai.{'\n'}
                ✓ Neither Italian nor Korean is easy to me = Cả tiếng ý và tiếng Hàn đều không dễ với tôi{'\n'}
                </Text>
                <Text></Text>
                <TouchableOpacity onPress={() => navigate('MH_Home')}>
                <Button iconLeft>
                  <Icon name='home' />
                  <Text>Home</Text>
                </Button>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}