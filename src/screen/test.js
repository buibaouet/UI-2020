import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    List,
    TextInput,
    ImageBackground,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import { RadioButton } from 'react-native-paper';
import bgImg from'../img/wallpaper.jpg';



const data = [
    {
        id: 1,
        question: 'What your name',
        a1:'John',
        a2:'Hai',
        a3:'Ba',
        a4:'Tu',
    },
    {
        id: 2,
        question: 'How are you',
        a1:'Fine',
        a2:'Sick',
        a3:'Weak',
        a4:'Die',
    },
    {
        id: 3,
        question: 'Are ___ alone?',
        a1:'you',
        a2:'me',
        a3:'she',
        a4:'he',
    },
    {
        id: 4,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
    {
        id: 5,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
    {
        id: 6,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
    {
        id: 7,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
    {
        id: 8,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
    {
        id: 9,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
    {
        id: 10,
        question: 'how are u',
        a1:'5',
        a2:'6',
        a3:'7',
        a4:'8',
    },
  ];


export default class Test extends Component {
    constructor (props){
        super(props);
        this.state={
            value: '',
            question: 'What your name',
            a1:'John',
            a2:'Hai',
            a3:'Ba',
            a4:'Tu',
        };
    }
    render() {
        const {navigate} = this.props.navigation;
        const des = this.props.navigation.state.params;
    return (
        <>
        <View>
    <Text style={{color: 'blue', textAlign: 'center',fontSize: 50, fontWeight: 'bold',}}>{des}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
            Alert.alert('Nộp bài',
                'Bạn chắc chắn muốn nộp bài',
                [
                  {text: 'Yes', onPress: () => {
                      Alert.alert('Điểm số','Bạn được 10 điểm',[{text: 'Trở về trang chủ',onPress: () => { navigate('MH_Home')}}])
                  }},
                  {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
                //clicking out side of alert will not cancel
              );
        }}>
              <Text>
                  Nộp bài
              </Text>
            </TouchableOpacity>
        <View>
            <View style = {styles.box}>
                <Text style={styles.textbox}>{this.state.question}</Text>
            </View>
        </View>
        <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
        >
        <View>
          <RadioButton value="first" />
          <Text style={styles.answer}>{this.state.a1}</Text>
        </View>
        <View>
          <RadioButton value="second" />
          <Text style={styles.answer}>{this.state.a2}</Text>
        </View>
        <View>
          <RadioButton value="third" />
          <Text style={styles.answer}>{this.state.a3}</Text>
        </View>
        <View>
          <RadioButton value="fourth" />
          <Text style={styles.answer}>{this.state.a4}</Text>
        </View>
        </RadioButton.Group>
        <FlatList
        horizontal
        data={data}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableOpacity style={styles.listQuestion} onPress={() => {
                this.setState({question: rowData.question,
                                a1: rowData.a1,
                                a2: rowData.a2,
                                a3: rowData.a3,
                                a4: rowData.a4,
                                value: ''}, () => {
                                console.log(this.state);
                                })}}>
              <Text>
                {rowData.id}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
        />
        </>
        
    );
  }
}
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;


var styles = StyleSheet.create({
    bg:{
        flex: 1,
    },
    listQuestion: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        padding: 15,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 1.3,
        borderColor: "rgba(131, 143, 158, 0.7)",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: '#0755DA',
    },
    button:{
        backgroundColor: '#0755DA',
        height: 50,
        width: 0.15 * DEVICE_WIDTH,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0.78 * DEVICE_WIDTH,
    },
    box:{
        backgroundColor: 'white',
        height: 100,
        width: 0.95 * DEVICE_WIDTH,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    textbox:{
        color: 'black',
        fontSize: 30
    },
    answer: {
        marginLeft: 50,
        marginTop: -30, 
        fontSize: 20,
    }
      
  });
