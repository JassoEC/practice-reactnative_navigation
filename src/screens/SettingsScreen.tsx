import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../theme/appTheme';
import {AuthContext} from '../context/AutnContext';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      <Icon name={authState.favoriteIcon || ''} size={80} color="#900" />
    </View>
  );
};
