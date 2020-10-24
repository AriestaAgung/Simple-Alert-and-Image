import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    Text,
    Alert,
    
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NavigationBar from 'react-native-navbar';
import FastImage from 'react-native-fast-image';

export default class GalleryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
    }

    getImgURL(){
        this.setState({ isLoading: true });
        var imgURL = []
        var singleURL = ""
        fetch('https://api.unsplash.com/photos?client_id=ETS4tGzlzz2zQAXEEYsC-7N7WL7oPgS3Ug3MKI40xFo', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJSON) => {
        for (var i = 0; i < 10; i++){
            data = responseJSON
            singleURL = JSON.stringify(data[i].urls.full)
            imgURL.push(singleURL.slice(1,-1))
            
        }
        this.setState({data: imgURL})
        urls.push(imgURL)
        // alert(imgURL)
        this.setState({isLoading: false});

    })
    .catch((error) => {
        alert(JSON.stringify(error))
        this.setState({isLoading: false});
    }) 
    }

    componentDidMount(){
        this.getImgURL()
    }

    render(){
        let imgView = []
        for(var i = 0; i < this.state.data.length; i++){
            const keys = 'image' + i
            const uris = this.state.data[i]
            imgView.push(
            <View key={keys} style={styles.imageListStyle}>
                <Image key={keys}  source={{uri: uris}} style={styles.logo}/>
            </View>

            )
        }

        return (
            <View style={styles.container}>
                {this.state.isLoading && <ActivityIndicator color={"blue"} alignItems={'center'}/>}
                <ScrollView>
                   
                    {imgView}
                   
                </ScrollView>
             
            </View>
        );
    }
}

const urls = []

const headerTitle = {
    title: "Image Collection"
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        // flexDirection: 'row',
      
    },
    logo: {
        // width: 100,
        height: 200,
    },
    imageListStyle:{
        margin:16,
        // width:'40%',
        
    }
})