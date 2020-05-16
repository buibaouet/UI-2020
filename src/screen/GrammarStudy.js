import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler'
export default class GrammarStudy extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>

        <Content>
          <List >
            <TouchableOpacity onPress={() => navigate('MH_GS1')}>
              <ListItem>
                <Left>                
                  <Text>12 thì động từ</Text>                  
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_GS2')}>
              <ListItem>
                <Left>               
                    <Text>Câu trực tiếp</Text>               
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_GS3')}>
              <ListItem>
                <Left>               
                  <Text>Câu bị động</Text>                  
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_GS4')}>
              <ListItem>
                <Left>                  
                    <Text>Câu hỏi đuôi</Text>                 
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_GS5')}>
              <ListItem>
                <Left>                
                    <Text>Câu điều kiện</Text>                 
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
             </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_GS6')}>
              <ListItem>
                <Left>              
                    <Text>Danh động từ</Text>              
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('MH_GS7')}>
              <ListItem>             
                <Left>             
                    <Text>Các loại từ</Text>       
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
