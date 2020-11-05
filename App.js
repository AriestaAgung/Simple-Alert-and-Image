import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/MainScreen';
import GalleryScreen from './src/GalleryScreen';
import CameraRollScreen from './src/CameraRollScreen';
import HelloWorld from './src/HelloWorldScreens';
import InputShowScreen from './src/InputAndShowScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainScreen}  />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="CameraRoll" component={CameraRollScreen}/>
          <Stack.Screen name="HelloWorld" component={HelloWorld} />
          <Stack.Screen name="InputShow" component={InputShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

// const App: () => React$Node = () => {
//   return (
//   );
// };
