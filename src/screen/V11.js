import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V11 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 1: Động vật (Animals)
                </Text>
                <Text>
                1. Abalone :bào ngư{'\n'}
                2. Aligator :cá sấu nam mỹ{'\n'}
                3. Anteater :thú ăn kiến{'\n'}
                4. Armadillo :con ta tu{'\n'}
                5. Ass : con lừa{'\n'}
                6. Baboon :khỉ đầu chó{'\n'}
                7. Bat : con dơi{'\n'}
                8. Beaver : hải ly{'\n'}
                9. Beetle : bọ cánh cứng{'\n'}
                10. Blackbird :con sáo{'\n'}
                11. Boar : lợn rừng{'\n'}
                12. Buck : nai đực{'\n'}
                13. Bumble-bee : ong nghệ{'\n'}
                14. Bunny :con thỏ( tiếng lóng){'\n'}
                15. Butter-fly : bươm bướm{'\n'}
                16. Camel : lạc đà{'\n'}
                17. Canary : chim vàng anh{'\n'}
                18. Carp :con cá chép{'\n'}
                19. Caterpillar :sâu bướm{'\n'}
                20. Centipede :con rết{'\n'}
                21. Chameleon :tắc kè hoa{'\n'}
                22. Chamois : sơn dương{'\n'}
                23. Chihuahua :chó nhỏ có lông mươt{'\n'}
                24. Chimpanzee :con tinh tinh{'\n'}
                25. Chipmunk : sóc chuột{'\n'}
                26. Cicada ; con ve sầu{'\n'}
                27. Cobra : rắn hổ mang{'\n'}
                28. Cock roach : con gián{'\n'}
                29. Cockatoo :vẹt mào{'\n'}
                30. Crab :con cua{'\n'}
                31. Crane :con sếu{'\n'}
                32. Cricket :con dế{'\n'}
                33. Crocodile : con cá sấu{'\n'}
                34. Dachshund :chó chồn{'\n'}
                35. Dalmatian :chó đốm{'\n'}
                36. Donkey : con lừa{'\n'}
                37. Dove, pigeon : bồ câu{'\n'}
                38. Dragon- fly : chuồn chuồn{'\n'}
                39. Dromedary : lạc đà 1 bướu{'\n'}
                40. Duck : vịt{'\n'}
                41. Eagle : chim đại bàng{'\n'}
                42. Eel : con lươn{'\n'}
                43. Elephant :con voi{'\n'}
                44. Falcon :chim Ưng{'\n'}
                45. Fawn : nai ,hươu nhỏ{'\n'}
                46. Fiddler crab :con cáy{'\n'}
                47. Fire- fly : đom đóm{'\n'}
                48. Flea : bọ chét{'\n'}
                49. Fly : con ruồi{'\n'}
                50. Foal :ngựa con{'\n'}
                51. Fox : con cáo{'\n'}
                52. Frog :con ếch{'\n'}
                53. Gannet :chim ó biển{'\n'}
                54. Gecko : tắc kè{'\n'}
                55. Gerbil :chuột nhảy{'\n'}
                56. Gibbon : con vượn{'\n'}
                57. Giraffe : con hươu cao cổ{'\n'}
                58. Goat :con dê{'\n'}
                59. Gopher :chuột túi, chuột vàng hay rùa đất{'\n'}
                60. Grasshopper :châu chấu nhỏ{'\n'}
                61. Greyhound :chó săn thỏ{'\n'}
                62. Hare :thỏ rừng{'\n'}
                63. Hawk :diều hâu{'\n'}
                64. Hedgehog : con nhím (ăn sâu bọ){'\n'}
                65. Heron :con diệc{'\n'}
                66. Hind :hươu cái{'\n'}
                67. Hippopotamus : hà mã{'\n'}
                68. Horseshoe crab : con Sam{'\n'}
                69. Hound :chó săn{'\n'}
                70. HummingBird : chim ruồi{'\n'}
                71. Hyena : linh cẫu{'\n'}
                72. Iguana : kỳ nhông, kỳ đà{'\n'}
                73. Insect :côn trùng{'\n'}
                74. Jellyfish : con sứa{'\n'}
                75. Kingfisher :chim bói cá{'\n'}
                76. Lady bird :bọ rùa{'\n'}
                77. Lamp : cừu non{'\n'}
                78. Lemur : vượn cáo{'\n'}
                79. Leopard : con báo{'\n'}
                80. Lion :sư tử{'\n'}
                81. Llama :lạc đà ko bướu{'\n'}
                82. Locust : cào cào{'\n'}
                83. Lopster :tôm hùm{'\n'}
                84. Louse : cháy rân{'\n'}
                85. Mantis : bọ ngựa{'\n'}
                86. Mosquito : muỗi{'\n'}
                87. Moth : bướm đêm ,sâu bướm{'\n'}
                88. Mule :con la{'\n'}
                89. Mussel :con trai{'\n'}
                90. Nightingale :chim sơn ca{'\n'}
                91. Octopus :con bạch tuột{'\n'}
                92. Orangutan :đười ươi{'\n'}
                93. Ostrich : đà điểu{'\n'}
                94. Otter :rái cá{'\n'}
                95. Owl :con cú{'\n'}
                96. Panda :gấu trúc{'\n'}
                97. Pangolin : con tê tê{'\n'}
                98. Papakeet :vẹt đuôi dài{'\n'}
                99. Parrot : vẹt thường{'\n'}
                100. Peacock :con công  {'\n'}  
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