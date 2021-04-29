import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
/* import {BasicDrawerNavigator} from './src/navigation/BasicDrawerNavigator'; */
/* import {StackNavigator} from './src/navigation/StackNavigator'; */
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicDrawerNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
