import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS2 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Câu trực tiếp - Câu Gián tiếp :
                </Text>
                <Text>
                - Lời nói trực tiếp (direct speech): là nói chính xác điều ai đó diễn đạt (còn gọi là trích dẫn). Lời của người nói sẽ được đặt trong dấu ngoặc kép. Ví dụ: She said ,” The exam is dicult”. "The exam is dicult" là lời nói trực tiếp hay câu trực ti
                </Text>
                <Text>
                Lời nói gián tiếp – câu tường thuật (indirect speech): Là thuật lại lời nói của một người khác dưới dạng gián tiếp, không dùng dấu ngoặc kép. Ví dụ: Hoa said,”I want to go home” -> Hoa said she wanted to go home là câu gián tiếp (indirect speech)
                </Text>
                <Text>
                CÁCH CHUYỂN CÂU TRỰC TIẾP SANG CÂU GIÁN TIẾP:
                </Text>
                <Text>
                Khi chuyển từ một lời nói trực tiếp sang gián tiếp khá đơn giản, chúng ta chỉ cần ghép nội dung tường thuật ở phía sau câu nói và hạ động từ của nó xuống một cấp quá khứ, đại từ được chuyển đổi cho phù hợp. Tuy nhiên, cần lưu ý một số vấn đề sau:
                </Text>
                <Text>
                  - Nếu động từ tường thuật (reporting verb) chia ở các thì hiện tại chúng ta giữ nguyên thì (tense) của động từ chính, đại từ chỉ định và các trạng từ chỉ nơi chốn cũng như trạng từ chỉ thời gian trong câu trực tiếp khi chuyển sang gián tiếp.
                    Ví dụ: 
                    -  He says: “I’m going to Ha Noi next week.”
                     ⇒ He says he is going to Ha Noi next week.
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