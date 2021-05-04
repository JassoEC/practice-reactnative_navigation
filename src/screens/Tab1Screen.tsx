import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text>TAb 1 Scrren</Text>
      <Icon name="airplane-outline" size={50} color="#900" />
    </View>
  );
};
