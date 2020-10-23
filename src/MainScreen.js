import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    NavigatorIOS,
    Alert,
    ScrollView
} from 'react-native';
import { create } from 'react-test-renderer';
import NavigationBar from 'react-native-navbar';

export default class MainScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={navTitle} />
                <View style={styles.mainContent}>
                    <Button title={"Alert Button"} onPress={createAlert} />
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
    
    navigationStyle:{
        alignItems: "center"
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        padding: 26
    },
    mainContent:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    alertBtn:{
        backgroundColor: 'cyan',
        color: 'white'
    }
});

// const App = () => {
    const createAlert = () => 
        Alert.alert(
            "Primakara Luar Biasa!",
            "By: Ariesta Agung",
            [
                {
                    text: "Back",
                    style: "cancel"
                }
            ], 
            {cancelable: false}
        )
          
// }