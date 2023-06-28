import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./Assets/nature.jpg')}
          style={styles.backgroundImage}>
          <Image source={require('./Assets/creative.jpg')}
            resizeMode="contain"
            style={styles.logoimage}>
          </Image>
          <Text style={styles.textView}>Welcome to Creative ideas platform</Text>
          <TextInput style={styles.inputView}
            placeholder="Username"
            placeholderTextColor='black'
            maxLength={10}>
          </TextInput>
          <TextInput style={styles.inputView}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}>
          </TextInput>
          <TextInput style={styles.inputView}
            placeholder="ConfirmPassword"
            placeholderTextColor="black">
            </TextInput>
          <TextInput style={styles.inputView}
            placeholder="Mobile Number"
            placeholderTextColor="black">
            </TextInput>
          <TouchableHighlight style={styles.buttonView}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableHighlight>
          
        </ImageBackground>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoimage: {
    height: 200,
    width: 200,
    marginBottom:20

  },
  textView: {
    fontSize: 25,
    color: 'blue',
    fontWeight:'bold',
    //marginTop:20
  },
  inputView: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: 'green',
    marginTop: 10,
    paddingLeft: 20,
    backgroundColor: 'white'

  },
  buttonView: {
    width:'60%',
    height: 55,
    backgroundColor:'green',
    marginTop: 30,
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'yellow',
    borderWidth:5
  },
  buttonText:{
    fontSize: 22,
    fontWeight: 'bold',
    color:'white',
   
  }
})