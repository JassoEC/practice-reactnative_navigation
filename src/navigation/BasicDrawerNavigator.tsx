import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const BasicDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
