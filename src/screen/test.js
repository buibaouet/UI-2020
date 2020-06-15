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

const data = [
  {
    id: 1,
    question: 'Question 1: What color ___ his new car?',
    a1:'A. have',
    a2:'B. is',
    a3:'C. does',
    a4:'D. are',
  },
  {
    id: 2,
    question: 'Question 2: They always go to school ___ bicycle.',
    a1:'A. with',
    a2:'B. in',
    a3:'C. on',
    a4:'D. by',
  },
  {
    id: 3,
    question: 'Question 3: Mr.Pike ___ us English.',
    a1:'A. teach',
    a2:'B. teaches',
    a3:'C. teaching',
    a4:'D. to teach',
  },
  {
    id: 4,
    question: 'Question 4:  What color ___ his new car?',
    a1:'A. have',
    a2:'B. is',
    a3:'C. does',
    a4:'D. are',
  },
  {
    id: 5,
    question: 'Question 5: They always go to school ___ bicycle.',
    a1:'A. with',
    a2:'B. in',
    a3:'C. on',
    a4:'D. by',
  },
  {
    id: 6,
    question: 'Question 6: Mr.Pike ___ us English.',
    a1:'A. teach',
    a2:'B. teaches',
    a3:'C. teaching',
    a4:'D. to teach',
  },
  {
    id: 7,
    question: 'Question 7:  What color ___ his new car?',
    a1:'A. have',
    a2:'B. is',
    a3:'C. does',
    a4:'D. are',
  },
  {
    id: 8,
    question: 'Question 8: They always go to school ___ bicycle.',
    a1:'A. with',
    a2:'B. in',
    a3:'C. on',
    a4:'D. by',
  },
  {
    id: 9,
    question: 'Question 9: Mr.Pike ___ us English.',
    a1:'A. teach',
    a2:'B. teaches',
    a3:'C. teaching',
    a4:'D. to teach',
  },
  {
    id: 10,
    question: 'Question 10:  What color ___ his new car?',
    a1:'A. have',
    a2:'B. is',
    a3:'C. does',
    a4:'D. are',
  },

];

export default class Test extends Component {
  constructor (props){
    super(props);
    this.state={
      value: '',
      question: 'Question 1: What color ___ his new car?',
      a1:'A. have',
      a2:'B. is',
      a3:'C. does',
      a4:'D. are',
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    const des = this.props.navigation.state.params;
    return (
      <>
      <View>
      <Text style={{ textAlign: 'center',fontSize: 40, fontWeight: 'bold',}}>{des}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10, marginBottom: 30}}>
      <Text style={{fontSize: 18}}>Time: 09:00</Text>
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
    </View>

    <View style={{flex: 1/10}}>
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
            a4: rowData.a4}, () => {
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
        </View>

        <View style = {{margin: 15, justifyContent: 'center'}}>
        <View style = {styles.box}>
        <Text style={styles.textbox}>{this.state.question}</Text>
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
<<<<<<< HEAD
        </View>
=======
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
>>>>>>> 477aec41d2aec0984bcb8adbce1a2622977baab1
        </>

      );
    }
  }
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const DEVICE_WIDTH = Dimensions.get('window').width;


  var styles = StyleSheet.create({
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
      backgroundColor: '#FFECB3',
    },
    button:{
      backgroundColor: '#4DD0E1',
      height: 40,
      width: 0.15 * DEVICE_WIDTH,
      borderRadius: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto'
    },
    box:{
      backgroundColor: 'white',
      height: 100,
      width: 0.95 * DEVICE_WIDTH,
      borderRadius: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    textbox:{
      color: 'black',
      fontSize: 22
    },
    answer: {
      marginLeft: 50,
      marginTop: -30,
      fontSize: 20,
    }

  });
