import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left } from 'native-base';
export default class Exercise extends Component {
  render() {
    return (
      <Container>
       
        <Content>
          <Card>
            <CardItem>
              <Left>
              <Text>Các thì</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Left>
              <Text>Từ vựng</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Left>
              <Text>Ngữ pháp</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Left>
              <Text>Nâng cao</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}