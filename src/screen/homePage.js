import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import bgImg from'../img/wallpaper.jpg';
import logo from'../img/Logo.png';
import vocab from'../img/vocab.png';
import grammar from'../img/grammar.png';
import link from'../img/link.png';
import exam from'../img/exam.png';
import video from'../img/video.png';
import hwork from'../img/homework.png';
import user from'../img/user.png';
import notifi from'../img/notification.png';
import search from'../img/search.png';

class HomePage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <ImageBackground style={styles.bg} source={bgImg}>
          <View style={{flex:2, backgroundColor: ''}}>
            <View style={{flex:1/4, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => navigate('')}>
                <Image source={notifi} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('')}>
                <Image source={user} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.logo}>
              <Text style={{color: 'white',fontSize: 35, fontWeight: 'bold',}}>UET-Eng</Text>
              <Image source={logo} style={{width: 80,resizeMode: 'contain',}} />
            </View>
            <View style={styles.search}>
              <Image source={search} style={{width: 28,resizeMode: 'contain',}} />
              <TextInput
                style={{borderBottomWidth: 2,
                fontSize: 18,
                width: DEVICE_WIDTH*0.65,}}
                placeholder='Tra từ điển Anh-Việt'
              />
            </View>
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.page} onPress={() => navigate('')}>
              <Image source={vocab} style={styles.image} />
              <Text style={styles.text}>Học từ vựng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page} onPress={() => navigate('')}>
              <Image source={grammar} style={styles.image} />
              <Text style={styles.text}>Học ngữ pháp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page} onPress={() => navigate('')}>
              <Image source={hwork} style={styles.image} />
              <Text style={styles.text}>Làm bài tập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page} onPress={() => navigate('')}>
              <Image source={exam} style={styles.image} />
              <Text style={styles.text}>Luyện đề thi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page} onPress={() => navigate('')}>
              <Image source={video} style={styles.image} />
              <Text style={styles.text}>Video bài giảng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.page} onPress={() => navigate('')}>
              <Image source={link} style={styles.image} />
              <Text style={styles.text}>Tham khảo thêm</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

var styles = StyleSheet.create({
  bg:{
    flex: 1,
  },
  logo: {
        flex:3/8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
  container: {
        flex:5,
        alignItems: 'center',
    },
  page: {
        flex:1,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 3,
        width: DEVICE_WIDTH - 30,
        marginBottom: 20,
        backgroundColor:'#ddd',
        flexDirection: 'row',
    },
    image:{
      marginLeft: 30,
      width: 55,
      resizeMode: 'contain',
    },
    icon:{
      width: 35,
      resizeMode: 'contain',
      flex: 1,
      marginRight: 20,
    },
    text:{
      marginLeft: 40,
      fontSize: 24,
    },
    search:{
      flex:3/8,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: 20,
      }
});

export default HomePage;
