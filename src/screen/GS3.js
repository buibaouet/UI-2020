import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS3 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                CÂU BỊ ĐỘNG (PASSIVE VOICE) :
                </Text>
                <Text>
                Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh đến đối tượng chịu tác động của hành động hơn là bản thân hành động đó. Thời của động từ ở câu bị động phải tuân theo thời của động từ ở câu chủ động.
                </Text>
                <Text>
                Cấu trúc câu bị động:
                </Text>
                <Text>
                  - Câu chủ động:  S1 + V + O.
                </Text>
                <Text>
                - Câu bị động: S2 + TO BE + PII.
                </Text>
               <Text> 
                 (Chủ ngữ + dạng của động từ “to be” + Động từ ở dạng phân từ 2)
               </Text>
               <Text>
               Câu chủ động ở dạng thì nào, chúng ta chia động từ “to be” theo đúng dạng thì đó. Chúng ta vẫn đảm bảo nguyên tắc chủ ngữ số nhiều, động từ TO BE được chia ở dạng số nhiều... 
                Ví dụ: They planted a tree in the garden. (Họ đã trồng một cái cây ở trong vườn.)
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