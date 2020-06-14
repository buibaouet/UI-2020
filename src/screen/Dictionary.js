import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.arrayWords = [
      'Apple',
      'Apricot',
      'Avocado',
      'Banana',
      'Blackberry',
      'Blackcurrant',
      'Blueberry',
      'Boysenberry',
      'Cherry',
      'Coconut',
      'Grape',
      'Grapefruit',
      'Kiwifruit ',
      'Lemon',
      'Lime',
      'Litchi',
      'Mango',
      'Melon',
      'Nectarine',
      'Orange',
      'Papaya',
    ];
  }

  SearchFilterFunction(text) {
      const newData = this.arrayWords.filter(function(item) {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        dataSource: newData,
        text: text,
      });
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
            <View style={{  alignItems: 'center',
              justifyContent: 'center',
              flex: 1/5,
            }}>
              <TextInput
                style={styles.search}
                placeholder='Tra từ điển Anh-Việt'
                onChangeText={text => this.SearchFilterFunction(text)}
              />
            </View>

          <View style={styles.container}>
          <Text style={{fontSize: 34}}>
            apple
          </Text>
          <Text>
            /’æpl/
          </Text>

          </View>
      </>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

var styles = StyleSheet.create({
  container: {
    flex: 4/5,
    margin: 50
  },
    search:{
      backgroundColor: '#EEE',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 18,
      width: DEVICE_WIDTH*0.65,
    },

  textStyle: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#FFFFCC',
    borderBottomWidth: 1
  },
  FlatList_Item: {
    height: DEVICE_HEIGHT/3,
    marginRight: 60,
    marginLeft: 60
},
});

export default Dictionary;
