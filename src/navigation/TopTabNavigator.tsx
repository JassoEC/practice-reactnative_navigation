import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/CharScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumScreen} from '../screens/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: '#5856D6',
        showIcon: true,
        indicatorStyle: {
          backgroundColor: '#5856D6',
        },
        style: {
          borderTopColor: '5856D6',
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubble-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'people-circle-outline';
              break;
            case 'Album':
              iconName = 'images-outline';
              break;
          }
          return <Icon name={iconName} size={20} style={{color}} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
