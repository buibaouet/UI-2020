import React, { Component } from 'react';
import {Container, Header, Content, Card,ListItem, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V3 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <ListItem>
                <Text>
                Từ vựng tiếng Anh theo chủ đề:
                </Text>
                </ListItem>
                <TouchableOpacity onPress={() => navigate('MH_V31')}>
                <ListItem>
                    <Text>
                    Bài 1: Chào hỏi
                    </Text>
                </ListItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('MH_V32')}>
                <ListItem>
                    <Text>
                    Bài 2: Đưa ra lời mời
                    </Text>
                </ListItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('MH_V33')}>
                <ListItem>
                    <Text>
                    Bài 3: Chúc mừng
                    </Text>
                </ListItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('MH_V34')}>
                <ListItem>
                    <Text>
                    Bài 4: Thích và không thích
                    </Text>
                </ListItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('MH_V35')}>
                <ListItem>
                    <Text>
                    Bài 5: Đề xuất ý kiến
                    </Text>
                </ListItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('MH_V36')}>
                <ListItem>
                    <Text>
                    Bài 6: Hỏi đường
                    </Text>
                </ListItem>
                </TouchableOpacity>
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