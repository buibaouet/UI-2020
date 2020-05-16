import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V32 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Bài 2: Đưa ra lời mời
                </Text>
                <Text>
                ✓ Are you free on Sunday Morning = Bạn có rảnh vào sáng chủ nhật không{'\n'}
                ✓ How about having dinner with me = Bạn đi ăn tối với tôi được không?{'\n'}
                ✓ If you are free. How about lunch = Nếu bạn rảnh đi ăn trưa cùng tôi được chứ?{'\n'}
                ✓ I ‘m not quite sure if I ‘m free = Tôi không chắc là tôi có rảnh không {'\n'}
                ✓ Well. I engaged at that time =  À, tôi có hẹn vào lúc đó{'\n'}
                ✓ I can’t keep appointment because I am sick =  Tôi không thể gặp bạn vì tôi bị ốm{'\n'}
                ✓ What time would be goog for you =  Khoảng mấy giờ sẽ thích hợp cho anh{'\n'}
                ✓ It ‘s Friday at twelve o’ clock, right =  12 giờ ngày thứ 6 đúng không?{'\n'}
                ✓ What time will you come = Mấy giờ anh đến{'\n'}
                ✓ I shall be there at seven o’ clock = Tôi sẽ đến đó lúc 7 giờ{'\n'}
                ✓ I ‘ll be about fifteen minutes late = Tôi sẽ đến muộn 5 phút{'\n'}
                ✓ I shall be free this evening = Tối nay tôi rảnh{'\n'}
                ✓ It ‘s vere thoughtfull of you to invite me = Bạn thật chu đáo khi mời tôi{'\n'}
                
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