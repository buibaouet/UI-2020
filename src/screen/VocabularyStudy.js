import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon,Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler'
export default class VocabularyStudy extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content>
          <List >
            <TouchableOpacity onPress={() => navigate('MH_V1')}>
              <ListItem>
                <Left>               
                  <Text>Theo chủ đề</Text>               
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V2')}>
              <ListItem>
              <Left>
                  <Text>Từ thông thường</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V3')}>
              <ListItem>
                <Left>
                  <Text>Từ giao tiếp</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V4')}>
              <ListItem>
                <Left>
                  <Text>Nâng cao</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  }
}
