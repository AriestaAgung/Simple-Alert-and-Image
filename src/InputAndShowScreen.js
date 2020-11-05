import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    Text,
    Alert,
    Button,
    TextInput
    
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NavigationBar from 'react-native-navbar';

export default class InputShowScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            textEditText: "",
            mainText: ""
        }
    }

    updateText = () => {
        this.setState({
            mainText: this.state.textEditText
        })
    }

    render(){
        return(
            <View style={style.container}>
                    <TextInput 
                        editable
                        style={style.mainTextInputStyle}
                        onChangeText= {text => this.setState({textEditText: text})}
                    />
                    <Button style={style.mainButton} onPress={this.updateText} title="Change Text Below !"/>
                    <Text style={style.mainTextStyle}>{this.state.mainText}</Text>

            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        paddingTop: 30,
    },
    mainButton: {
        backgroundColor: 'cyan',
        color: 'white',
        
    },
    mainTextStyle:{
        margin: 16
    },
    mainTextInputStyle: {
       borderColor: 'black',
       borderWidth: 1,
       borderRadius: 5,
       width: 200,
       margin: 16
    }
})