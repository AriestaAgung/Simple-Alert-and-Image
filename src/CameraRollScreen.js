import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet, PermissionsAndroid, Platform, Image, ScrollView
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';


export default class CameraRollScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }


    async getPhotos() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                    'title': 'Access Storage',
                    'message': 'Access Storage for the pictures'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                CameraRoll.getPhotos({
                        first: 10,
                        assetType: 'Photos'
                    })
                    .then((photo) => {
                        console.log("log photo", photo.edges)

                        this.setState({
                            photos: photo.edges
                        })
                        console.log("Log Photos")
                    })
                    .catch((error) => {
                        alert(error)
                    })
            } else {
                console.log("Storage permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }


    componentDidMount() {
        this.getPhotos()
        
    }

    render() {
        return ( 
            <View style={style.container}>
                <ScrollView >
                    
                    {this.state.photos.map((p, i) =>{
                        return(
                            <View>
                                <Image key={i} style={style.images} source={{
                                    uri: p.node.image.uri
                                 }}/>
                            </View>
                            
                        )
                    }
                   )}
                   
                </ScrollView>
                </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,

    },
    imageContainer:{
        // height: '100%',
        width:'100%',
        margin:16
    },
    images:{
        height: 500,
        margin: 16,
        
    }
})