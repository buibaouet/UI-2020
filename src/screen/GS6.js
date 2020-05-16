import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS6 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Danh động từ (Gerund):
                </Text>
                <Text>
                - Gerund ( danh động từ ) là danh từ được hình thành bằng cách thêm đuôi ing vào động từ. VD: coming, building, teaching…
                </Text>
                <Text>
               - Phủ định của danh động từ được hình thành bằng cách thêm not vào trước V-ing. VD: not making, not opening…
                </Text>
                <Text>
                - Cũng có thể thêm tính từ sở hữu vào trước danh động từ để nói rõ chủ thể thực hiện hành động. VD: my turning on the air conditioner
                </Text>
                <Text></Text>
                <Text>
                Cách sử dụng danh động từ ( Gerund ):
                </Text>
                <Text>
                - Dùng làm chủ ngữ trong câu. VD: Reading helps you improve your vocabulary
                </Text>
                <Text>
                - Dùng làm bổ ngữ cho động từ. VD: Her favorite hobby is collecting stamps. (Sở thích của cô ấy là sưu tầm tem.)
                </Text>
                <Text>
                - Dùng làm tân ngữ của động từ. VD: He loves surng the Internet. (Anh ấy thích lướt Internet.)
                </Text>
                <Text>
                - Dùng sau giới từ (on, in, by, at…) và liên từ (after, before, when, while…). VD: Young people are very much interested in travelling. He cleaned his room before going out with his friends. (Anh ấy đã dọn dẹp phòng mình trước khi đi chơi với bạn bè.)
                </Text>
                <Text>
                - Dùng sau một số động từ và cụm động từ sau: enjoy, avoid, admit, appreciate, mind, nish, practice, advise, suggest, recommend, postpone, delay, consider, hate, like, love, deny, detest, keep, miss, imagine, mention, risk, recall, risk, quiet, waste (time), forbid, permit, resent, escape, cant’ help, can’t bear / can’t stand, be used to, get used to, look forward to, it’s no use / it’s no good, be busy, be worth… VD: They enjoyed working on the boat. (Họ rất thích làm việc trên thuyền.) . The man admitted stealing the company’s money. (Người đàn ông ấy thừa nhận ăn cắp tiền của công ty.)
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