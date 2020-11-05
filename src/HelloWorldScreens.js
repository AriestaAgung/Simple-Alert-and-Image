import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    Text,
    Alert,
    Button,
    
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NavigationBar from 'react-native-navbar';

export default class HelloWorld extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btnState: false,
            btnTitle: "Tampilkan",
            mainText: ""
        }
    }

    onPressedBtn = () => {
        if (this.state.btnState){
            this.setState({
                btnState: false,
                mainText: "",
                btnTitle: "Tampilkan"
            })
        } else {
            this.setState({
                btnState: true,
                mainText: "Hello World",
                btnTitle: "Sembunyikan"
            })
        }
       
    }



    render(){

        

        return(
            <View style={style.container}>
                <Button style={style.mainButton} onPress={this.onPressedBtn} title={this.state.btnTitle}/>
                <Text>{this.state.mainText}</Text>
            </View>
        )   
    }
}



const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: 'space-around',
    },
    mainButton: {
        backgroundColor: 'cyan',
        color: 'white'
    }
})