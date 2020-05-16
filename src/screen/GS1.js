import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS1 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Các thì trong tiếng Anh :
                </Text>
                <Text>
                Trong tiếng Anh được chia thành 12 thì cơ bản theo 3 mốc thời gian: Hiện tại, Quá khứ và Tương lai.
                </Text>
                <Text>
                1. Thì hiện tại đơn – Present simple
                </Text>
                <Text>
                - Công thức với Động từ thường: 
                </Text>
                <Text>
                Khẳng định: S + V(s/es) + O, Phủ định: S + do/does not + V_inf + O, Nghi vấn: Do/Does + S + V_inf + O?
                </Text>
                <Text>
                - Công thức với Động từ to be: 
                </Text>
                <Text>
                Khẳng định: S + am/is/are + O. Phủ định: S + am/is/are  not + O. Nghi vấn: Am/is/are + S + O?
                </Text>
                <Text>
                Cách dùng:
                </Text>
                <Text>
                Diễn tả một sự thật hiển nhiên, một chân lý. Diễn tả một thói quen, sở thích hay hành động được lặp đi lặp lại ở hiện tại. Diễn tả một lịch trình, chương trình, một thời gian biểu
                </Text>
                <Text>
                2. Thì hiện tại tiếp diễn – Present continuous tense
                </Text>
                <Text>
                - Công thức: Khẳng định: S + am/is/are + V_ing + …, Phủ định: S + am/is/are not + V_ing + … Nghi vấn: Am/Is/Are + S + V_ing + …?
                </Text>
                <Text>
                - Cách dùng: Diễn tả hành động đang xảy ra và kéo dài ở hiện tại. Diễn tả dự định, kế hoạch sắp xảy ra trong tương lai đã định trước. Diễn tả sự phàn nàn về việc gì đó, dùng với “Always”. Dùng để cảnh báo, đề nghị và mệnh lệnh.
                </Text>
                <Text>
                3. Thì hiện tại hoàn thành – Present perfect tense
                </Text>
                <Text>
                - Công thức: Khẳng định: S + has/have + V3/ed + O. Phủ định: S + has/have not + V3/ed + O. Nghi vấn: Have/has + S + V3/ed + O?
                </Text>
                <Text>
                - Cách dùng: Diễn tả 1 hành động xảy ra trong quá khứ nhưng vẫn còn ở hiện tại và tương lai. Diễn tả hành động xảy ra và kết quả trong quá khứ nhưng không nói rõ thời gian xảy ra. Diễn tả hành động vừa mới xảy ra. Nói về kinh nghiệm, trải nghiệm.
                </Text>
                <Text>
                4. Thì hiện tại hoàn thành tiếp diễn – Present perfect continuous tense
                </Text>
                <Text>
                - Công thức: Câu khẳng định: S + has/have been + V_ing. Câu phủ định: S + has/have not been + V-ing . Câu nghi vấn:  Have/Has + S + been + V-ing?
                </Text>
                <Text>
                  - Cách dùng: Diễn tả hành động xảy ra diễn ra liên tục trong quá khứ, tiếp tục kéo dài đến hiện tại.  Diễn tả hành động vừa kết thúc, mục đích nêu kết quả của hành động.
                </Text>
                <Text>
                5. Thì quá khứ đơn – Past simple tense
                </Text>
                <Text>
                - Công thức với Động từ thường: Câu khẳng định: S + V2/ed + O. Câu phủ định: S + did not + V_inf + O. Câu nghi vấn: Did + S + V_inf + O ?
                </Text>
                <Text>
                  - Công thức với Động từ to be: Câu khẳng định: S + was/were + O. Câu phủ định: S + were/was not + O. Câu nghi vấn: Was/were + S + O?
                </Text>
                <Text>
                - Cách dùng: Diễn tả một hành động đã xảy ra và đã kết thúc tại thời điểm trong quá khứ.  Diễn tả những hành động xảy ra liên tiếp tại thời trong điểm quá khứ. Diễn đạt một hành động xen vào một hành động đang diễn ra tại thời điểm trong quá khứ 
                </Text>
                <Text>
                6. Thì quá khứ tiếp diễn – Past continuous tense
                </Text>
                <Text>
                - Công thức: Câu khẳng định: S + were/ was + V_ing + O. Câu phủ định: S + were/was+ not + V_ing + O. Câu nghi vấn: Were/was+S+ V_ing + O?
                </Text>
                <Text>
                - Cách dùng: Để diễn tả hành động đang xảy ra tại một thời điểm trong quá khứ. Diễn tả một hành động đang xảy ra trong quá khứ thì có một hành động khác xen vào. Diễn tả những hành động xảy ra song song với nhau.
                </Text>
                <Text>
                7. Thì quá khứ hoàn thành – Past perfect tense
                </Text>
                <Text>
                  - Công thức: {'\n'}Câu khẳng định: S + had + V3/ed + O. {'\n'}Câu phủ định: S + had + not + V3/ed + O. {'\n'}Câu nghi vấn: Had + S + V3/ed + O?
                </Text>
                <Text>
                  - Cách dùng: {'\n'}Diễn tả hành động đã hoàn thành trước một thời điểm trong quá khứ. {'\n'}Diễn đạt một hành động đã xảy ra trước một hành động khác trong quá khứ. Hành động xảy ra trước dùng quá khứ hoàn thành – xảy ra sau dùng quá khứ đơn
                </Text>
                <Text>
                8. Thì quá khứ hoàn thành tiếp diễn – Past perfect continuous tense
                </Text>
                <Text>
                - Công thức: {'\n'}Câu khẳng định: S + had been + V_ing + O. {'\n'}Câu phủ định: S + had + not + been + V_ing + O. {'\n'}Câu nghi vấn: Had + S + been + V_ing + O?  
                </Text>
                <Text>
                  - Cách dùng: {'\n'}Diễn tả một hành động xảy ra liên tục trước một hành động khác trong quá khứ. {'\n'}Diễn tả một hành động xảy ra kéo dài liên tục trước một thời điểm được xác định trong quá khứ. 
                </Text>
                <Text>
                9. Thì tương lai đơn – Simple future tense
                </Text>
                <Text>
                - Công thức: {'\n'}Câu khẳng định: S + shall/will + V(infinitive) + O. {'\n'}Câu phủ định: S + shall/will + not + V(infinitive) + O. {'\n'}Câu nghi vấn: Shall/will+S + V(infinitive) + O?
                </Text>
                <Text>
                  - Cách dùng: {'\n'}Diễn tả một dự đoán không có căn cứ xác định. {'\n'}Diễn tả dự định đột xuất xảy ra ngay lúc nói. {'\n'}Diễn tả lời ngỏ ý, hứa hẹn, đề nghị, đe dọa.
                </Text>
                <Text>
                10. Thì tương lai tiếp diễn – Future continuous tense
                </Text>
                <Text>
                - Công thức: {'\n'}Câu khẳng định: S + will/shall + be + V-ing. {'\n'}Câu phủ định: S + will/shall + not + be + V-ing. {'\n'}Câu nghi vấn: Will/shall + S + be + V-ing?
                </Text>
                <Text>
                  - Cách dùng: {'\n'}Diễn tả về một hành động xảy ra trong tương lai tại thời điểm xác định. {'\n'}Diễn tả về một hành động đang xảy ra trong tương lai thì có hành động khác chen vào. 
                </Text>
                <Text>
                11. Thì tương lai hoàn thành – Future perfect tense
                </Text>
                <Text>
                - Công thức: {'\n'}Câu khẳng định: S + shall/will + have + V3/ed. {'\n'}Câu phủ định: S + shall/will not + have + V3/ed. {'\n'}Câu nghi vấn: Shall/Will+ S + have + V3/ed?
                </Text>
                <Text>
                  - Cách dùng : {'\n'}Diễn tả về một hành động hoàn thành trước một thời điểm xác định trong tương lai. {'\n'}Diễn tả về một hành động hoàn thành trước một hành động khác trong tương lai. 
                </Text>
                <Text>
                12. Thì tương lai hoàn thành tiếp diễn – Future perfect continuous tense
                </Text>
                <Text>
                - Công thức:{'\n'} Câu khẳng định: S + shall/will + have been + V-ing + O. {'\n'}Câu phủ định: S + shall/will not+ have + been + V-ing. {'\n'}Câu ghi vấn: Shall/Will + S+ have been + V-ing + O?
                </Text>
                <Text>
                  - Cách dùng: {'\n'}Diễn tả một hành động xảy ra trong quá khứ tiếp diễn liên tục đến một thời điểm cho trước trong tương lai.
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