import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V14 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 4: Rau củ (Vegetables)
                </Text>
                <Text>
              
          
                Eggplant: /ˈeɡplɑːnt/ cà tím{'\n'}

                Beet: /biːt/ củ dền{'\n'}

                Pepper: /ˈpepə(r)/ ớt chuông{'\n'}

                Yam: /jæm/ khoai mỡ{'\n'}

                Asparagus /əˈspærəɡəs/ măng tây{'\n'}

                Radish /ˈrædɪʃ/ củ cải{'\n'}

                Turnip /ˈtɜːnɪp/ củ cải{'\n'}

                Bean sprouts /ˈbiːn spraʊts/ giá{'\n'}

                Corn: /kɔːn/ Ngô{'\n'}

                Cucumber: /ˈkjuːkʌmbə(r)/ Dưa chuột{'\n'}

                Potato: /pəˈteɪtəʊ/ Khoai tây{'\n'}

                Tomato: /təˈmɑːtəʊ/ Cà chua{'\n'}

                Carrot: /ˈkærət/ Cà rốt{'\n'}

                Pumpkin: /ˈpʌmpkɪn/ bí đỏ{'\n'}

                Marrow: /ˈmærəʊ/ Bí xanh{'\n'}

                string bean: /ˌstrɪŋ ˈbiːn/ Đậu đũa{'\n'}
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