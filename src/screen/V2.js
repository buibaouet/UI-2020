import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V2 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
               Các từ thông dụng :
                </Text>
                <Text>
                STT.	Từ tiếng Anh =	Nghĩa tiếng Việt{'\n'}
                1. people =	Người{'\n'}
                2.	history	= Lịch sử{'\n'}
                3.	way	=	Đường{'\n'}
                4.	art	=	Nghệ thuật{'\n'}
                5.	world	=	Thế giới{'\n'}
                6.	information	=	Thông tin{'\n'}
                7.	map	=	Bản đồ{'\n'}
                8.	two	=	Hai{'\n'}
                9.	family	=	Gia đình{'\n'}
                10.	government	=	Chính phủ{'\n'}
                11.	health	=	Sức khỏe{'\n'}
                12.	system	=	Hệ thống{'\n'}
                13.	computer	=	Máy tính{'\n'}
                14.	meat	=	Thịt{'\n'}
                15.	year	=	Năm{'\n'}
                16.	thanks	=	Lời cảm ơn{'\n'}
                17.	music	=	Âm nhạc{'\n'}
                18.	person	=	Người{'\n'}
                19.	reading	=	Cách đọc{'\n'}
                20.	method	=	Phương pháp{'\n'}
                21.	data	=	Dữ liệu{'\n'}
                22.	food	=	Thức ăn{'\n'}
                23.	understanding	=	Hiểu biết{'\n'}
                24.	theory	=	Lý thuyết{'\n'}
                25.	law	=	Pháp luật{'\n'}
                26.	bird	=	Chim{'\n'}
                27.	literature =	Văn chương{'\n'}
                28.	problem	=	Vấn đề{'\n'}
                29.	software	=	Phần mềm{'\n'}
                30.	control	=	Kiểm soát{'\n'}
                31.	knowledge	=	Kiến thức{'\n'}
                32.	power	=	Quyền lực{'\n'}
                33.	ability	=	Khả năng{'\n'}
                34.	economics	=	Kinh tế học{'\n'}
                35.	love	=	Tình Yêu{'\n'}
                36.	internet	=	Internet{'\n'}
                37.	television	=	Tivi{'\n'}
                38.	science	=	Khoa học{'\n'}
                39.	library	=	Thư viện{'\n'}
                40.	nature	=	Bản chất{'\n'}
                41.	fact	=	Việc{'\n'}
                42.	product	Sản phẩm{'\n'}
                43.	idea	Ý kiến{'\n'}
                44.	temperature	=	Nhiệt độ{'\n'}
                45.	investment	=	Đầu tư{'\n'}
                46.	area	=	Khu vực{'\n'}
                47.	society	=	Xã hội{'\n'}
                48.	activity	=	Hoạt động{'\n'}
                49.	story	Câu =	chuyện{'\n'}
                50.	industry	=	Ngành công nghiệp{'\n'}
                51.	media	=	Phương tiện truyền thông{'\n'}
                52.	thing	=	những vật{'\n'}
                53.	oven	=	Lò nướng{'\n'}
                54.	community	=	Cộng đồng{'\n'}
                55.	definition	=	Định nghĩa{'\n'}
                56.	safety	=	Sự an toàn{'\n'}
                57.	quality	=	Chất lượng{'\n'}
                58.	development	=	Phát triển{'\n'}
                59.	language	=	Ngôn ngữ{'\n'}
                60.	management	=	Quản lý{'\n'}
                61.	player	=	Người chơi{'\n'}
                62.	variety	=	Nhiều{'\n'}
                63.	video	=	Video{'\n'}
                64.	week	=	Tuần{'\n'}
                65.	security	=	An ninh{'\n'}
                66.	country	=	Nước{'\n'}
                67.	exam	=	Thi{'\n'}
                68.	movie	=	Phim{'\n'}
                69.	organization	=	Cơ quan{'\n'}
                70.	equipment	=	Thiết bị{'\n'}
                71.	physics	=	Vật lý{'\n'}
                72.	analysis	=	Nghiên cứu{'\n'}
                73.	policy	=	Chính sách{'\n'}
                74.	series	=	Loạt{'\n'}
                75.	thought	=	Tư tưởng{'\n'}
                76.	basis	=	Căn cứ{'\n'}
                77.	boyfriend	=	Bạn trai{'\n'}
                78.	direction	=	Phương hướng{'\n'}
                79.	strategy	=	Chiến lược{'\n'}
                80.	technology	=	Công nghệ{'\n'}
                81.	army	=	Quân đội{'\n'}
                82.	camera	=	Máy chụp hình{'\n'}
                83.	freedom	=	Sự tự do{'\n'}
                84.	paper	=	Giấy{'\n'}
                85.	environment	=	Môi trường{'\n'}
                86.	child	=	Trẻ em{'\n'}
                87.	instance	=	Trường hợp{'\n'}
                88.	month	=	Tháng{'\n'}
                89.	truth	=	Sự thật{'\n'}
                90.	marketing	=	Thị trường{'\n'}
                91.	university	=	Trường đại học{'\n'}
                92.	writing	=	Viết{'\n'}
                93.	article	=	Điều khoản{'\n'}
                94.	department	=	Bộ{'\n'}
                95.	difference	=	Khác nhau{'\n'}
                96.	goal	=	Mục tiêu{'\n'}
                97.	news	=	Tin tức{'\n'}
                98.	audience	=	Khán giả{'\n'}
                99.	fishing	=	Đánh cá{'\n'}
                100.	growth	=	Tăng trưởng{'\n'}
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