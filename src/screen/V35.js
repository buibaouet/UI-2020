import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V35 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Bài 5: Đề xuất ý kiến
                </Text>
                <Text>
                
                ✓ Do you mind if I make a suggestion =	Bạn có phiền không nếu như tôi đưa ra đề nghị này?{'\n'}
                ✓ I have another idea =	Tôi có một ý tưởng khác.{'\n'}
                ✓ I’d like to make one more point =	Tôi muốn làm một điều nữa.{'\n'}
                ✓ Why don’t you buy a new mortorbike =	Tại sao bạn không mua một chiếc xe máy mới{'\n'}
                ✓ Why don’t you put on the new shirt =	Sao bạn không mặc áo mới?{'\n'}
                ✓ Is it ok if we do it tomorrow =	Chúng ta làm việc này vào ngày mai được chứ?{'\n'}
                ✓ Let’s do it now =	Hãy làm ngay bây giờ.{'\n'}
                ✓ Let’s sing an English song, shall we? =	 Chúng ta hãy hát một bài hát tiếng Anh được chứ?{'\n'}
                ✓ If I were you, I would give up smoking right now? =	Nếu tôi là bạn, tôi sẽ bỏ thuốc ngay.{'\n'}
                ✓ Maybe you’d better go to visit Vietnam first =	Có lẽ bạn nên đến thăm Việt Nam trước.{'\n'}
                ✓ It’s wrong to eat too much sweet food =	Ăn quá nhiều thức ăn ngọt là không tốt{'\n'}

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