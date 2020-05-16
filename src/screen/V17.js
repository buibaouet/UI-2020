import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V17 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 7: Môi trường (Environment)
                </Text>
                <Text>
              
                
                1. acid rain /ˈæsɪd reɪn/ mưa a xít {'\n'}
                2. atmosphere /ˈætməsfɪə/ khí quyển {'\n'}
                3. biodiversity /ˌbaɪoʊdəˈvərsət̮i/ sự đa dạng sinh học {'\n'}
                4. carbon footprint /ˈkɑːbən ˈfʊtprɪnt/ dấu chân các-bon {'\n'}
                5. catastrophe /kəˈtæstrəfi/ thảm họa {'\n'}
                6. climate /ˈklaɪmət/ khí hậu {'\n'}
                7. climate change /ˈklaɪmət ʧeɪnʤ/ hiện tượng biến đổi khí hậu {'\n'}
                8. creature /ˈkriːʧə/ sinh vật {'\n'}
                9. destruction /dɪsˈtrʌkʃən/ sự phá hủy {'\n'}
                10. disposal /dɪsˈpəʊzəl/ sự vứt bỏ {'\n'}
                11. desertification /dɪˌzɜːtɪfɪˈkeɪʃən/ quá trình sa mạc hóa {'\n'}
                12. deforestation /dɪˌfɒrɪˈsteɪʃ(ə)n/ sự phá rừng {'\n'}
                13. dust /dʌst/ bụi bẩn {'\n'}
                14. earthquake /ˈɜːθkweɪk/ cơn động đất {'\n'}
                15. ecology /ɪˈkɒləʤi/ sinh thái học {'\n'}
                16. ecosystem /ˈiːkəʊˌsɪstəm/ hệ sinh thái {'\n'}
                17. bemission /ɪˈmɪʃən/ sự bốc ra {'\n'}
                18. alternative energy /ɔːlˈtɜːnətɪv ˈɛnəʤi/ năng lượng thay thế {'\n'}
                19. environment /ɪnˈvaɪrənmənt/ môi trường {'\n'}
                20. environmentalist /ɪnˌvaɪrənˈmentəlɪst/ nhà môi trường học {'\n'}
                21. erosion /ɪˈrəʊʒən/ sự xói mòn {'\n'}
                22. endangered species /ɪnˈdeɪnʤəd ˈspiːʃiːz/ các loài {'\n'}
                23. exhaust /ɪgˈzɔːst/ khí thải {'\n'}✓ Hello, my name Hugo = Chào bạn, tên tôi là Hugo{'\n'}
                24. fossil fuel /ˈfɒsl fjʊəl/ nhiên liệu hóa thạch {'\n'}
                25. famine /ˈfæmɪn/ nạn đói {'\n'}
                26. pesticide /ˈpɛstɪsaɪd/ thuốc trừ sâu {'\n'}
                27. fertilizer /ˈfɜːtɪlaɪzə/ phân bón {'\n'}
                28. global warming /ˈgləʊbəl ˈwɔːmɪŋ/ hiện tượng ấm lên toàn cầu {'\n'}
                29. greenhouse effect /ˈgriːnhaʊs ɪˈfɛkt/ hiệu ứng nhà kính {'\n'}
                30. industrial waste /ɪnˈdʌstrɪəl weɪst/ chất thải công nghiệp {'\n'}
                31. natural resources /ˈnæʧrəl rɪˈsɔːsɪz/ tài nguyên thiên nhiên {'\n'}
                32. oil spill /ɔɪl spɪl/ sự cố tràn dầu {'\n'}
                33. ozone layer /ˈəʊzəʊn ˈleɪə/ tầng ô-zôn {'\n'}
                34. pollution /pəˈluːʃən/ sự ô nhiễm {'\n'}
                35. preservation /ˌprɛzəːˈveɪʃən/ sự bảo tồn {'\n'}
                36. rainforest /ˈreɪnˌfɒrɪst/ rừng nhiệt đới {'\n'}
                37. sea level /siː ˈlɛvl/ mực nước biển {'\n'}
                38. sewage /ˈsjuːɪʤ/ nước thải {'\n'}
                39. soil /sɔɪl/ đất {'\n'}
                40. solar power /ˈsəʊlə ˈpaʊə/ năng lượng mặt trời {'\n'}
                41. solar panel /ˈsəʊlə ˈpænl/ pin mặt trời {'\n'}
                42. urbanization /ˌərbənəˈzeɪʃn/ quá trình đô thị hóa{'\n'}
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