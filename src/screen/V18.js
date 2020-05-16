import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V18 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 8: Màu sắc (Colors)
                </Text>
                <Text>
              
                
                1.     White /waɪt/ (adj): trắng{'\n'}
 
                2.     Blue /bluː/ (adj): xanh da trời{'\n'}
                  
                3.     Green /griːn/ (adj): xanh lá cây{'\n'}
                  
                4.     Yellow /ˈjel.əʊ/ (adj): vàng{'\n'}
                  
                5.     Orange /ˈɒr.ɪndʒ/(adj): màu da cam{'\n'}
                  
                6.     Pink /pɪŋk/ (adj): hồng{'\n'}
                  
                7.     Gray /greɪ/ (adj): xám{'\n'}
                  
                8.     Red /red/ (adj): đỏ{'\n'}
                  
                9.     Black /blæk/(adj): đen{'\n'}
                  
                10.  Brown /braʊn/ (adj): nâu{'\n'}
                  
                11.  Beige /beɪʒ/(adj): màu be{'\n'}
                  
                12.  Violet /ˈvaɪə.lət/ (adj): tím{'\n'}
                  
                13.  Purple /`pə:pl/: màu tím{'\n'}
                  
                14.  Bright red /brait red /: màu đỏ sáng{'\n'}
                  
                15.  Bright green /brait griːn/: màu xanh lá cây tươi{'\n'}
                  
                16.  Bright blue /brait bluː/ màu xanh nước biển tươi.{'\n'}
                  
                17.  Dark brown /dɑ:k braʊn/ :màu nâu đậm{'\n'}
                  
                18.  Dark green /dɑ:k griːn/ : màu xanh lá cây đậm{'\n'}
                  
                19.  Dark blue /dɑ:k bluː/ màu xanh da trời đậm{'\n'}
                  
                20.  Light brown /lait braʊn /: màu nâu nhạt{'\n'}
                  
                21.  Light green /lait griːn /: màu xanh lá cây nhạt{'\n'}
                  
                22.  Light blue /lait bluː/: màu xanh da trời nhạt{'\n'}
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