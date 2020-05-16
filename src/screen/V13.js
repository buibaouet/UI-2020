import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V13 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 3: Trái cây (Fruits)
                </Text>
                <Text>
              
                
                Apple /’æpl/: táo{'\n'}
                ​Apricot /ˈæ.prɪ.kɒt/: quả mơ{'\n'}
                ​Avocado /¸ævə´ka:dou/: trái bơ{'\n'}
                ​Banana: /bə’nɑ:nə/: trái chuối{'\n'}
                ​Blackberry /´blækbəri/: mâm xôi đen{'\n'}
                ​Blackcurrant /´blækkʌrənt/: nho Hy Lạp{'\n'}
                ​Blueberry /ˈbluː.ˌbɛr.i/: quả việt quất{'\n'}
                ​Cherry /´tʃeri/: anh đào{'\n'}
                ​Coconut /’koukənʌt/: dừa{'\n'}
                ​Cantaloup  /'kæntəlu:p/: dưa lưới{'\n'}
                ​Fig /fig/: quả sung{'\n'}
                ​Grape /greɪp/: nho{'\n'}
                ​Grapefruit /’greipfru:t/: bưởi{'\n'}
                ​Kiwi Fruit /’ki:wi:fru:t/: quả kiwi{'\n'}
                ​Lemon /´lemən/: chanh vàng{'\n'}
                ​Lime /laim/: chanh vỏ xanh{'\n'}
                ​Lychee (litchi): /’li:tʃi:/: vải{'\n'}
                ​Mandarin /’mændərin/: quýt{'\n'}
                ​Mango /´mæηgou/: xoài{'\n'}
                ​Melon /´melən/: dưa{'\n'}
                ​Orange /ɒrɪndʒ/: quả cam{'\n'}
                ​Papaya (pawpaw) /pə´paiə/: đu đủ{'\n'}
                ​Passion fruit  /´pæʃən¸fru:t/: chanh dây{'\n'}
                ​Peach /pitʃ/: quả đào{'\n'}
                ​Pear /peə/: quả lê{'\n'}
                ​Pineapple /’pain,æpl/: thơm{'\n'}
                ​Plum /plʌm/: mận{'\n'}
                ​Pomegranate /´pɔm¸grænit/: lựu{'\n'}
                ​Raspberry /ˈræzbəri/: mâm xôi{'\n'}
                ​Strawberry /ˈstrɔ:bəri/: dâu tây{'\n'}
                ​Tamarind: /’tæmərind/: quả me{'\n'}
                ​Watermelon /’wɔ:tə´melən/: dưa hấu{'\n'}
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