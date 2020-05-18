import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V31 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Bài 1: Chào hỏi
                </Text>
                <Text>
              
                ✓ Hello, my name Hugo = Chào bạn, tên tôi là Hugo{'\n'}
                ✓ Good Morning = Chào buổi sáng{'\n'}
                ✓ How do you do = Anh thế nào?{'\n'}
                ✓ How are you today? = Hôm nay anh thế nào{'\n'}
                ✓ Not too bad = không tệ lắm{'\n'}
                ✓ Not so well = không tốt lắm{'\n'}
                ✓ Glad to meet you = Rất vui được làm quen với anh{'\n'}
                ✓ I have’t seen you for a long time =  Lâu lắm rồi không gặp anh{'\n'}
                ✓ How are your parents? =  Bố mẹ của bạn khỏe không{'\n'}
                ✓ Their ‘re fine = Bố mẹ tôi khỏe{'\n'}
                ✓ How is your sister? = Chị gái của bạn thế nào{'\n'}
                ✓ She ‘s fine. = Chị ấy khỏe{'\n'}
                ✓ Goodnight = Chúc ngủ ngon{'\n'}
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