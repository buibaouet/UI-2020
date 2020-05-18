import React, { Component } from 'react';
import {  Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS4 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Câu hỏi đuôi (Tag Question) :
                </Text>
                <Text>
                là một dạng câu hỏi rất hay được sử dụng trong tiếng Anh, luyện thi ielts đặc biệt là trong bài thi TOEIC hay tiếng Anh giao tiếp, dạng một câu hỏi ngắn đằng sau một câu trần thuật. Câu trả lời dạng YES/NO nhưng mang sắc thái ý nghĩa khác nhau.
                </Text>
                <Text>
                Cấu trúc:
                </Text>
                <Text>
                1. Đối với động từ thường (ordinary verbs)
                </Text>
                <Text>
                - Câu giới thiệu khẳng định, phần hỏi đuôi phủ định. S + V(s/es/ed/2)….., don’t/doesn’t/didn’t + S?
                </Text>
                <Text>
                - Câu giới thiệu phủ định, phần hỏi đuôi khẳng định. S + don’t/ doesn’t/didn’t + V….., do/does/did + S?
                </Text>
                <Text>
                  2. Đối với động từ đặc biệt (special):
                </Text>
                <Text>
                Là các động từ khi chuyển sang câu phủ định ta thêm NOT vào sau động từ, khi chuyển sang nghi vấn đưa chính động từ này lên trước chủ ngữ.
                </Text>
                <Text>
                - Câu giới thiệu khẳng định, phần hỏi đuôi phủ định. S + special verb….. , special verb + not + S?.  VD:  – You are a student, aren’t you?, She has just bought a new bicycle, hasn’t she?
                </Text>
                <Text>
                Câu giới thiệu phủ định, phần hỏi đuôi khẳng định. S + special verb + not….., special verb  + S?. VD: – You aren’t a student, are you?,  She hasn’t bought a new bicycle, has she?
                </Text>
                <Text>
                  3. Đối với động từ khiếm khuyết
                </Text>
                <Text>
                - Câu giới thiệu khẳng định, phần hỏi đuôi phủ định. S + modal verb…………., modal verb + not + S?. VD: – He can speak English, can’t he?, Lan will go to Hue next week, won’t she?
                </Text>
                <Text>
                Câu giới thiệu phủ định, phần hỏi đuôi khẳng định. S + modal verb + not…………., modal verb + S?. VD: – He can’t speak English, can he?, Lan won’t go to Hue next week, will she?
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