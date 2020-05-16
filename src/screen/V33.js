import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V33 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Bài 3: Chúc mừng
                </Text>
                <Text>
               
                ✓ Let me congratulation you on your graduation =Chúc mừng bạn vì bạn đã tốt nghiệp nhé{'\n'}
                ✓ Please accept my warmets congratulations =  Vui lòng chấp nhận lời chúc mừng nồng nhiệt của tôi{'\n'}
                ✓ Thanks. I won’t forget your help = Cảm ơn. Tôi sẽ không quên sự giúp đỡ của anh{'\n'}
                ✓ Many thanks! I’m really very happy. =  Cảm ơn rất nhiều. Tôi thực sự rất hạnh phúc{'\n'}
                ✓ I can’t tell you how happy I am = Tôi không thể tả được là tôi đang hạnh phúc tới thế nào{'\n'}
                ✓ It’s very nice of you to say so = Bạn thật tốt khi nói vậy.{'\n'}
                ✓ I think I’m very lucky = Tôi nghĩ tôi rất may mắn.{'\n'}
                ✓ Oh, It was nothing = Ồ, không có gì.{'\n'}
                ✓ I’m glad I made it =  Tôi rất vui vì tôi đã làm được.{'\n'}
                ✓ So you heard =  Vậy là anh đã biết rồi.{'\n'}
                ✓ I don’t know what to say = Tôi không biết phải nói gì.{'\n'}
                ✓ I really appreciate your help = Tôi thực sự đánh giá cao sự giúp đỡ của anh.{'\n'}
                ✓ I hope I can still get your help and support = Tôi hi vọng tôi vẫn nhận được sự giúp đỡ và hỗ trợ của anh.{'\n'}
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