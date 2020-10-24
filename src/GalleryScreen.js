import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    Text,
    
} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class GalleryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    

    // componentDidMount(){
    //     fetch('https://api.unsplash.com/photos?client_id=ETS4tGzlzz2zQAXEEYsC-7N7WL7oPgS3Ug3MKI40xFo',{
    //     method: 'GET',
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //      },
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       return responseJson.movies
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // }

    getImgURL(){
        this.setState({ isLoading: true });
        var imgURL = []
        var singleURL = ""
        var data = ""
        fetch('https://api.unsplash.com/photos?client_id=ETS4tGzlzz2zQAXEEYsC-7N7WL7oPgS3Ug3MKI40xFo', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJSON) => {
        // alert(JSON.stringify(responseJSON))
        singleURL = responseJSON
        // alert(JSON.stringify(singleURL[0].urls.full))
        for (var i = 0; i < 10; i++){
            data = responseJSON
            singleURL = JSON.stringify(data[i].urls.full)
            imgURL.push(
                singleURL
            )
        }
        alert(imgURL)
        this.setState({isLoading: false});

    })
    .catch((error) => {
        alert(JSON.stringify(error))
        this.setState({isLoading: false});
    }) 
        return imgURL
    }

    componentDidMount(){
        
        this.getImgURL()
        
    }
    render(){
        
        return (
            <View style={styles.container} on>
                <Text>Testing</Text>
                {this.state.isLoading && <ActivityIndicator color={"#fff"}/>}
                
            </View>
        );
    }
}

const getImgList = () => {
    
}

const headerTitle = {
    title: "Image Collection"
}


const styles = StyleSheet.create({
    container: {
        flex:1

    }
})