import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS5 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Câu điều kiện:
                </Text>
                <Text>
                Câu điều kiện là loại câu được sử dụng thông dụng phổ biến trong tiếng Anh, bao gồm: câu điều kiện loại 0, loại 1, loại 2, loại 3.
                </Text>
                <Text>
                  1. câu điều kiện loại 0
                </Text>
                <Text>
                  Công thức: If + S + V(s,es), S+ V(s,es)/câu mệnh lệnh
                </Text>
                <Text>
                  Cách sử dụng: Điều kiện diễn tả thói quen, sựthật hiển nhiên
                </Text>
                <Text>
                  2. câu điều kiện loại 1
                </Text>
                <Text>
                  Công thức: If + S + V(s,es), S + Will/Can/shall…… + V.  Ví dụ: If the weather is nice, I will go swimming tomorrow.
                </Text>
                <Text>
                  Cách sử dụng: Điều kiện có thể xảy ra ở hiện tại ở tương lai
                </Text>
                <Text>
                  3. câu điều kiện loại 2
                </Text>
                <Text>
                  Công thức: If + S + V2/ Ved, S +would/ Could/ Should…+ V.  Ví dụ: If I were you, I would follow her advice.
                </Text>
                <Text>
                  Cách sử dụng: Điều kiện không có thật ở hiện tại
                </Text>
                <Text>
                  4. câu điều kiện loại 3
                </Text>
                <Text>
                  Công thức:If + S + Had + V(pp)/Ved, S + would/ could…+ have + V(pp)/Ved.  Ví dụ: If I had studied the lessons, I could have answered the questions.
                </Text>
                <Text>
                  Cách sử dụng: Điều kiện không có thật trong quá khứ
                </Text>
                <Text>
                  5. câu điều kiện loại 4
                </Text>
                <Text>
                  Công thức:If + S + had + V3/Ved, S + would + V.  Ví dụ: If she hadn't stayed up late last night, she wouldn't be so tired now
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