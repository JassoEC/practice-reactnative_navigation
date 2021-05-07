import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../theme/appTheme';
import {AuthContext} from '../context/AutnContext';
import {RouteStackParams} from '../navigation/StackNavigator';

/* interface RouteParams {
  name: string;
  id: number;
} */

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  const {setUserName} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    setUserName(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
