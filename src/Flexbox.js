import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
}from 'react-native'

class FlexContent extends Component{
  render(){
    return(
      <View>
        <Text style={styles.contentStyle}>Hi my name is {this.props.name}</Text>
      </View>
    )
  }
}
export default class Flexbox extends Component{
  constructor(){
    super();
    this.state= {
      main_state: 'Hello',
      sub_text: 'React'
    }
  }
  updateText(){
    this.setState({
      main_text: 'Hi(Hello updated)',
      sub_text: 'Framework (React updated)'
    })
  }
    render(){
        return(
            <View style={styles.container}>
             <Text style={styles.text}>{this.state.main_text}</Text>
             <Text style={styles.text}>{this.state.sub_text}</Text>
             <Text style={styles.text}> Native</Text>
             <TouchableHighlight style={styles.button}
                underlayColor='blue'
                onPress={()=>this.updateText()}>
                 <Text style={styles.buttontext}>UPDATE</Text>
             </TouchableHighlight>
             <FlexContent name="Sam">

             </FlexContent>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
    //flexDirection: 'row'
  },
  text: {
    fontSize: 24,
    color: '#000000',
    fontWeight:'bold'
    
  },
  button: {
    width: '60%',
    height:55,
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:6,
    marginTop: 20
  },
  buttontext: {
    fontSize: 20,
    color: 'gray',
    fontWeight:'bold',
    color:'white'
  },
  contentStyle: {
    fontSize:24,
    fontWeight:'bold',
    color:'#369',
    //marginTop: 20
  }
})