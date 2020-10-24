import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    NavigatorIOS,
    Alert,
} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class MainScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainContent}>
                    <Button title={"Alert Button"} onPress={createAlert} />
                    <Button title={"Photo From Unsplash API"} onPress={() => this.props.navigation.navigate('Gallery')} />
                </View>
            </View>
        );
    }
}


const navTitle = {
    title: "Meet 5"
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        backgroundColor: 'red',
        alignItems: 'center'
    },
    mainContent:{
        flex: 1,
        justifyContent: 'space-around',
        // flexDirection: 'row',
        alignItems: 'center'
    },
    alertBtn:{
        backgroundColor: 'cyan',
        color: 'white'
    }
});

const createAlert = () =>
  Alert.alert(
    'Primakara Luar Biasa!',
    'By: Ariesta Agung',
    [
      {
        text: 'Dismiss',
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
