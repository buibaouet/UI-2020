import React, { Component } from 'react';
import {Container, Header, Content, List, ListItem, Text, Left, Right, Icon  } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V1 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content>
          <List >
            <TouchableOpacity onPress={() => navigate('MH_V11')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 1: Động vật (Animals)</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V12')}>
              <ListItem>
              <Left>
                  <Text>Chủ đề 2: Cây cối (Plants)</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V13')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 3: Trái cây (Fruits)</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V14')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 4: Rau củ (Vegetables) </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V15')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 5: Phong cảnh (Landscape) </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V16')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 6: Thời tiết (Weather) </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V17')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 7: Môi trường (Environment)</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_V18')}>
              <ListItem>
                <Left>
                  <Text>Chủ đề 8: Màu sắc (Colors)</Text>
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
