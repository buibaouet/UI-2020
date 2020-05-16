import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class GS7 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
       
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                Có 8 loại từ trong tiếng Anh :
                </Text>
                <Text>
                  1. Danh từ (Nouns): Là từ gọi tên người, đồ vật, sự việc hay nơi chốn. Ví dụ: teacher, desk, sweetness, city.
                </Text>
                <Text>
                 2. Đại từ (Pronouns): Là từ dùng thay cho danh từ để không phải dùng lại danh từ ấy nhiều lần. Ví dụ: I, you, them, who, that, himself, someone.
                </Text>
                <Text>
                3. Tính từ (Adjectives): Là từ cung cấp tính chất cho danh từ, làm cho danh từ rõ nghĩa hơn, chính xác và đầy đủ hơn. Ví dụ: a dirty hand, a new dress, the car is new.
                </Text>
                <Text>
                4. Động từ (Verbs): Là từ diễn tả một hành động, một tình trạng hay một cảm xúc. Nó xác định chủ từ làm hay chịu đựng một điều gì. Ví dụ: play, cut, go The boy played football. He is hungry. The cake was cut.
                </Text>
                <Text>
                  5. trạng từ (Adverbs): Là từ bổ sung ý nghĩa cho một động từ, một tính từ hay một trạng từ khác. Tương tự như tính từ, nó làm cho các từ mà nó bổ nghĩa rõ ràng, đầy đủ và chính xác hơn. Ex: He ran quickly. I saw him yesterday. It is very large.
                </Text>
                <Text>
                  6. Giới từ (Prepositions): Là từ thường dùng với danh từ và đại từ hay chỉ mối tương quan giữa các từ này với những từ khác, thường là nhằm diễn tả mối tương quan về hoàn cảnh, thời gian hay vị trí. Ex: It went by air mail. The desk was near the window.
                </Text>
                <Text>
                  7. Liên từ (Conjunctions): Là từ nối các từ (words), ngữ (phrases) hay câu (sentences) lại với nhau. Ex: Peter and Bill are students. He worked hard because he wanted to succeed.
                </Text>
                <Text>
                  8. thán từ (Interjections): Là từ diễn tả tình cảm hay cảm xúc đột ngột, không ngờ. Các từ loại này không can thiệp vào cú pháp của câu.
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