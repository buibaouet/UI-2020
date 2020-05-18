import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class V4 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                #1. Trường học, chứng chỉ{'\n'}
                ✓ Kindergarten: trường mầm non{'\n'}

                ✓ Primary school – pre-school education = Trường cấp 1{'\n'}

                ✓ Secondary school: Trường cấp 2{'\n'}

                ✓ College = further education : Cao đẳng{'\n'}

                ✓ Higher education = university education{'\n'}

                ✓ Post-graduate school: sau đại học{'\n'}

                ✓ BA/BSs = Bachelor of Arts Degree/Bachelor of Science Degree{'\n'}

                ✓ MA/MSc = Masters of Arts/Masters of Science{'\n'}

                ✓ PhD = Doctorate{'\n'}

                ✓ Vocational course: khóa học dạy về kỹ năng cho một nghề nghiệp cụ thể (khóa học hướng nghiệp){'\n'}

                ✓ Non-vocational course: khóa học tổng quát, không liên quan đến hướng nghiệp{'\n'}

                ✓ Distance leaning course: khóa học đào tạo từ xa{'\n'}

                ✓ Comprehensive education: giáo dục toàn diện{'\n'}
                </Text>
                <Text>
                #2. Collocations quan trọng{'\n'}

                ✓ Lab work = laboratory experiments = thí nghiệm trong phòng thí nghiệm{'\n'}

                ✓ Dissection: sự mổ xẻ động vật nhằm mục đích nghiên cứu khoa học{'\n'}

                ✓ Scheduled lesson: lịch học{'\n'}

                ✓ Algebra: đại số học{'\n'}

                ✓ To give out or assign homework: giao bài tập về nhà{'\n'}

                ✓ To do or complete homework: hoàn thành bài tập về nhà{'\n'}

                ✓ To complete/graduate high school: tốt nghiệp trung học phổ thông{'\n'}

                ✓ To do/participate/take part in school activities/sport: tham gia các hoạt động tại trường/thể thao{'\n'}

                ✓ Tracing: sao chép, phác thảo bằng bút chì{'\n'}

                ✓ Tone deaf = without an ear for music: không có khả năng thưởng thức âm nhạc{'\n'}{'\n'}

                #3. Từ vựng dùng trong trường đại học{'\n'}

                ✓ Graducated from: tốt nghiệp từ{'\n'}

                ✓ To enroll on a degree course: đăng ký một khóa học{'\n'}

                ✓ To major in physics: chọn vật lý là môn học chính ở đại học{'\n'}

                ✓ To attend a lecture: tham gia bài giảng{'\n'}

                ✓ To attend a tutorial: tham gia lớp học với giáo sư theo nhóm nhỏ tại văn vòng{'\n'}

                ✓ To deliver lecture: giảng bài{'\n'}

                ✓ To lecture in something: giảng về cái gì đó{'\n'}

                ✓ Factory of something: chuyên ngành gì{'\n'}

                ✓ To do note-taking: ghi chép, ghi chú lại{'\n'}

                ✓ Keeping up with the work load: theo kịp với khối lượng công việc hoặc khối lượng học được yêu cầu{'\n'}

                ✓ To fall behind with study = fail to keep pace with the school/university work: không theo kịp bài vở trên trường{'\n'}

                ✓ Pay off a student loan: thanh toán khoản vay sinh viên{'\n'}

                ✓ Play truant/truancy: trốn học{'\n'}

                ✓ Comprehensive education: giáo dục toàn diện{'\n'}

                ✓ The literacy rate: tỉ lệ biết chữ{'\n'}

                ✓ Literate (a): biết chữ{'\n'}

                ✓ Illiterate (a): mù chữ{'\n'}

                ✓ A gap year: chỉ một năm nghỉ khi chuyển tiếp giữa cấp 3 và đại học{'\n'}
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