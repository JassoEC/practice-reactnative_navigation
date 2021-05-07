import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
/* import {BasicDrawerNavigator} from './src/navigation/BasicDrawerNavigator'; */
/* import {StackNavigator} from './src/navigation/StackNavigator'; */
import {DrawerNavigator} from './src/navigation/DrawerNavigator';
import {AuthProvider} from './src/context/AutnContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AppState>
          {/* <StackNavigator /> */}
          {/* <BasicDrawerNavigator /> */}
          <DrawerNavigator />
        </AppState>
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
