import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BasicDrawerNavigator} from './src/navigation/BasicDrawerNavigator';
/* import {StackNavigator} from './src/navigation/StackNavigator'; */

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BasicDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
