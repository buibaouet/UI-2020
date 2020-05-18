import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V16 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Chủ đề 6: Thời tiết (Weather)
                </Text>
                <Text>
              
                
                1.     Cloudy / ˈklaʊdi  /: nhiều mây{'\n'}
 
                2.     Windy / ˈwɪndi  /: nhiều gió{'\n'}
                
                3.     Foggy / ˈfɔːɡi  /: có sương mù{'\n'}
                
                4.     Stormy / ˈstɔːrmi  /: có bão{'\n'}
                
                5.     sunny  / ˈsʌni  /-có nắng{'\n'}
                
                6.     frosty / ˈfrɔːsti  /-giá rét{'\n'}
                
                7.     dry / draɪ /-khô{'\n'}
                
                8.     wet / wet  / -ướt{'\n'}
                
                9.     hot / hɑːt  /-nóng{'\n'}
                
                10.   cold / koʊld  /-lạnh{'\n'}
                
                11.   chilly / ˈtʃɪli  /-lạnh thấu xương{'\n'}
                
                12.   Wind Chill / wɪnd  tʃɪl /: gió rét{'\n'}
                
                13.   Torrential rain / təˈrenʃl  reɪn /: mưa lớn, nặng hạt{'\n'}
                
                14.   Flood / flʌd  /: lũ, lụt, nạn lụt{'\n'}
                
                15.   the Flood; Noah's Flood / ˌnoʊəz  flʌd  / : nạn Hồng thuỷ{'\n'}
                
                16.   lightning / ˈlaɪtnɪŋ /: Chớp, tia chớp{'\n'}
                
                17.   Lightning arrester / ˈlaɪtnɪŋ əˈrestər /: Cột thu lôi{'\n'}
                
                18.   Thunder / ˈθʌndər /: Sấm, sét{'\n'}
                
                19.   Thunderbolt / ˈθʌndərboʊlt /: Tiếng sét, tia sét{'\n'}
                
                20.   Thunderstorm / ˈθʌndərstɔːrm  /: Bão tố có sấm sét, cơn giông{'\n'}
                
                21.   rain / reɪn  /-mưa{'\n'}
                
                22.   snow / snoʊ / -tuyết{'\n'}
                
                23.   fog / fɔːɡ /-sương mù{'\n'}
                
                24.   Ice / aɪs  /-băng{'\n'}
                
                25.   Sun / sʌn  /-mặt trời{'\n'}
                
                26.   sunshine / ˈsʌnʃaɪn /-ánh nắng{'\n'}
                
                27.   cloud / klaʊd  / -mây{'\n'}
                
                28.   mist / mɪst /-sương muối{'\n'}
                
                29.   hail / heɪl  /-mưa đá{'\n'}
                
                30.   wind / wɪnd /-gió{'\n'}
                
                31.   breeze / briːz  / -gió nhẹ{'\n'}
                
                32.   gale /  ɡeɪl /-gió giật{'\n'}
                
                33.   frost / frɔːst  /-băng giá{'\n'}
                
                34.   rainbow / ˈreɪnboʊ  /-cầu vồng{'\n'}
                
                35.   sleet  / sliːt  /-mưa tuyết{'\n'}
                
                36.   drizzle / ˈdrɪzl  /-mưa phùn{'\n'}
                
                37.   icy / ˈaɪsi  /-đóng băng{'\n'}
                
                38.   Dull / dʌl  / -lụt{'\n'}
                
                39.   overcast / ˌoʊvərˈkæst  /-u ám{'\n'}
                
                40.   raindrop / ˈreɪndrɑːp / -hạt mưa{'\n'}
                
                41.   snowflake / ˈsnoʊfleɪk  / -bông tuyết{'\n'}
                
                42.   hailstone / ˈheɪlstoʊn  /-cục mưa đá{'\n'}
                
                43.   weather forecast / ˈweðər ˈfɔːrkæst  / dự báo thời tiết{'\n'}
                
                44.   rainfall / ˈreɪnfɔːl  / lượng mưa{'\n'}
                
                45.   temperature / ˈtemprətʃər / nhiệt độ{'\n'}
                
                46.   thermometer / θərˈmɑːmɪtər / nhiệt kế{'\n'}
                
                47.   barometer / bəˈrɑːmɪtər / dụng cụ đo khí áp{'\n'}
                
                48.   degree  / dɪˈɡriː  / độ{'\n'}
                
                49.   Celsius  / ˈselsiəs / độ C{'\n'}
                
                50.   Fahrenheit / ˈfærənhaɪt / độ F{'\n'}
                
                51.   Climate /  ˈklaɪmət / khí hậu{'\n'}
                
                52.   climate change /  ˈklaɪmət tʃeɪndʒ  / biến đổi khí hậu{'\n'}
                
                53.   global warming  / ˈɡloʊbl ˈwɔːrmɪŋ  / hiện tượng ấm nóng toàn cầu{'\n'}
                
                54.   humid / ˈhjuːmɪd / ẩm{'\n'}
                
                55.   Shower / ˈʃaʊər  /: mưa rào{'\n'}
                
                56.   Tornado / tɔːrˈneɪdoʊ  /: lốc (noun) một cơn gió cực mạnh xoáy tròn trong một khu vực nhỏ; xoay tròn theo cột không khí{'\n'}
                
                57.   Rain-storm/rainstorm / ˈreɪnstɔːrm /: Mưa bão{'\n'}
                
                58.   Storm / stɔːrm  /: Bão, giông tố (dông tố) - từ gọi chung cho các cơn bão{'\n'}
                
                59.   Typhoon / taɪˈfuːn  /: Bão, siêu bão (dùng để gọi các cơn bão ở Tây Bắc Thái Bình Dương){'\n'}
                
                60.   Hurricane / ˈhɜːrəkən /: Bão (dùng để gọi các cơn bão ở Đại Tây Dương / Bắc Thái Bình Dương){'\n'}
                
                61.   Cyclone  / ˈsaɪkloʊn / Bão (dùng để gọi các cơn bão ở Nam Bán Cầu){'\n'}
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