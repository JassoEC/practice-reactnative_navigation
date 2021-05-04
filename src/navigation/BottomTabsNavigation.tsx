import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: '#5856D6',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'american-football-outline';
              break;
            case 'Tab2Screen':
              iconName = 'attach-outline';
              break;
            case 'StackScreen':
              iconName = 'barbell-outline';
              break;
          }
          return <Icon name={iconName} size={20} style={{color}} />;
        },
      })}>
      <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tabs 2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackScreen"
        options={{title: 'Stacks'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: 'red',
        style: {
          borderColor: 'blue',
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'american-football-outline';
              break;
            case 'Tab2Screen':
              iconName = 'attach-outline';
              break;
            case 'StackScreen':
              iconName = 'barbell-outline';
              break;
          }

          return <Icon name={iconName} size={20} style={{color}} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        /* options={{
          title: 'Tabs 1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }} */
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tabs 2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackScreen"
        options={{title: 'Stacks'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
