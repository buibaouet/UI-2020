import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V15 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 5: Phong cảnh (Landscape)
                </Text>
                <Text>
              
                
                1. Desert – /’dezərt/: Sa mạc{'\n'}

                2. Rainforest – /’rein’fɔrist/: Rừng mưa nhiệt đới{'\n'}

                3. Hill – /hil/: Đồi{'\n'}

                4. Jungle – /’ʤʌɳgl/: Rừng nhiệt đới{'\n'}

                5. Rock – /rɔk/: Đá{'\n'}

                6. Canyon – /’kænjən/: Hẻm núi{'\n'}

                7. Meadow – /’medou/: Đồng cỏ{'\n'}

                8. Volcano – /vɔl’keinou/: Núi lửa{'\n'}

                9. Cliff – /klif/: Vách đá{'\n'}

                10. Valley – /’væli/: Thung lũng{'\n'}

                11. Forest – /’fɔrist/: Rừng{'\n'}

                12. Dune – /dju:n/: Cồn cát{'\n'}

                13. brink – /briɳk/: Bờ vực{'\n'}

                14. Mountain – /’mauntin/: Núi{'\n'}

                15. Ocean – /’ouʃn/: Đại dương{'\n'}

                16. Land – /lænd/: Đất liền{'\n'}

                17. Shore – /ʃɔ:/: Bờ biển{'\n'}

                18. Soil – /sɔil/: Đất trồng trọt{'\n'}

                19. Beach – /bi:tʃ/: Bãi biển{'\n'}

                20. National Park – /’neiʃənl pɑ:k/: Công viên quốc gia{'\n'}

                21. Plain – /plein/: Đồng bằng{'\n'}

                22. Coast – /koust/: Vùng đất sát biển{'\n'}

                23. Ground – /graund/: Mặt đất{'\n'}

                24. Sea – /si:/: Biển{'\n'}

                25. Island – /’ailənd/: Đảo{'\n'}

                26. Canal – /kə’næl/: Kênh rạch{'\n'}

                27. Stream – /stri:m/: Suối{'\n'}

                28. Lake – /leik/: Hồ{'\n'}

                29. Pond – /pɔnd/: Ao{'\n'}

                30. Fall – /fɔ:l/: Thác nước{'\n'}
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