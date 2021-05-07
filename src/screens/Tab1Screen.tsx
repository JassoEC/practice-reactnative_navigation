import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text>TAb 1 Scrren</Text>
      <TouchableIcon name="airplane-outline" />
      <TouchableIcon name="attach-outline" />
      <TouchableIcon name="bonfire-outline" />
      <TouchableIcon name="calculator-outline" />
      <TouchableIcon name="images-outline" />
      <TouchableIcon name="leaf-outline" />
    </View>
  );
};
