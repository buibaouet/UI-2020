import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V36 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Bài 6: Hỏi đường
                </Text>
                <Text>
            
                ✓ Excuse me, Where is the nearest park, please? =	Xin lỗi, cho tôi hỏi công viên gần nhất ở đâu{'\n'}
                ✓ Excuse me, can you tell me the way to the station? =	Xin lỗi, bạn có thể nói cho tôi biết đường tới ga được không?{'\n'}
                ✓ How can I get to the park? =	Làm thế nào tôi có thể đến công viên?{'\n'}
                ✓ Turn right at the second crossing. =	Rẽ phải ở ngã ba thứ hai{'\n'}
                ✓ It’s about one hundred meters from here. =	 Khoảng 100 mét từ đây.{'\n'}
                ✓ Excuse me, is this the right way to the station? =	Xin lỗi, đây có phải đường tới ga không?{'\n'}
                ✓ How long will it take me to get to the sea? =	Đi tới biển tôi phải mất bao lâu?{'\n'}
                ✓ Do these buses run to the center of the town? =	 Những chuyến xe buýt này có chạy đến trung tâm thành phố không?{'\n'}
                ✓ Is there a short way? =	Đây có phải là đường tắt không?{'\n'}
                ✓ Can I take a bus there? =	Tối có thể bắt xe buýt ở đó không?{'\n'}
                ✓ Can I go there on foot? =	Tôi có thể đi bộ tới đó được không?{'\n'}
                ✓ Take bus number 32, get off at the terminal. =	Đi xe buýt số 32, xuống ga cuối.{'\n'}
                
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