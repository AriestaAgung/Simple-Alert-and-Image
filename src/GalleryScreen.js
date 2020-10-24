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
    componentDidMount(){
        this.setState({ isLoading: true });
        getImgList()
        this.setState({isLoading: false});
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
    fetch('https://api.unsplash.com/photos?client_id=ETS4tGzlzz2zQAXEEYsC-7N7WL7oPgS3Ug3MKI40xFo', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJSON) => {
        alert(JSON.stringify(responseJSON))
        console.log(responseJSON)
    })
    .catch((error) => {
        alert(JSON.stringify(error))
        console.error(error)
    }) 
}

const headerTitle = {
    title: "Image Collection"
}


const styles = StyleSheet.create({
    container: {
        flex:1

    }
})