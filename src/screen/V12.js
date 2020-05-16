import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V12 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 2: Cây cối (Plants)
                </Text>
                <Text>
              
                
                Alder – /’ɔl:də/: Cây tổng quán sủi{'\n'}
                Ash – /æ∫/: Cây tần bì{'\n'}
                Beech – /bi:t∫/: Cây sồi{'\n'}
                Birch – /bə:t∫/: Cây gỗ bu lô{'\n'}
                Cedar – /’si:də/: Cây tuyết tùng{'\n'}
                Elm – /elm/: Cây đu{'\n'}
                Fir – /fə:/: Cây linh sam{'\n'}
                Hazel – /’heizl/: Cây phỉ{'\n'}
                Hawthorn – /’hɔ:θɔ:n/: Cây táo gai{'\n'}
                Holly – /’hɔli/: Cây nhựa ruồi{'\n'}
                Lime – /laim/: Cây đoan{'\n'}
                Maple – /’meipl/: Cây thích{'\n'}
                Oak – /əʊk/: Cây sồi{'\n'}
                Plane – /plein/: Cây tiêu huyền{'\n'}
                Pine – /pain/: Cây thông{'\n'}
                Poplar – /’pɔplə(r)/: Cây bạch dương{'\n'}
                Sycamore – /’sikəmɔ:/: Cây sung dâu{'\n'}
                Weeping willow – /ˈwiːpɪŋ ˈwɪləʊ/: Cây liễu rủ{'\n'}
                Willow – /’wilou/: Cây liễu{'\n'}
                Yew – /ju:/: Cây thủy tùng{'\n'}
                Apple tree – /ˈæpl triː/: Cây táo{'\n'}
                Cherry tree – /ˈʧɛri triː/: Cây anh đào{'\n'}
                Chestnut tree – /ˈʧɛsnʌt triː/: Cây dẻ{'\n'}
                Coconut tree – ˈkəʊkənʌt triː/: Cây dừa{'\n'}
                Fig tree – /fɪg triː/: Cây sung{'\n'}
                Horse chestnut tree – /hɔːs ˈʧɛsnʌt triː/: Cây dẻ ngựa{'\n'}
                Olive tree – /ˈɒlɪv triː/: Cây ô liu{'\n'}
                Pear tree – /peə triː/: Cây lê{'\n'}
                Plum tree – /plʌm triː/: Cây mận{'\n'}
                Bracken – /’brækən/: Cây dương xỉ diều hâu{'\n'}
                Bush – /bu∫/: Bụi rậm{'\n'}
                Cactus – /kæktəs/: Cây xương rồng{'\n'}
                Corn – /kɔ:n/: Cây ngô{'\n'}
                Fern – /fə:n/: Cây dương xỉ{'\n'}
                Flower – /’flauə/: Hoa{'\n'}
                Grass – /grɑ:s/: Cỏ trồng{'\n'}
                Heather – /’heðə/: Cây thạch nam{'\n'}
                Herb – /hə:b/: Thảo mộc{'\n'}
                Ivy – /’aivi/: Cây thường xuân{'\n'}
                Moss – /mɔs/: Rêu{'\n'}
                Mushroom – /’mʌ∫rum/: Nấm{'\n'}
                Nettle – /’netl/: Cây tầm ma{'\n'}
                Shrub – /∫rʌb/: Cây bụi{'\n'}
                Wheat – /wi:t/: Lúa mì{'\n'}

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