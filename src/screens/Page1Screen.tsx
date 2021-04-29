import React, {useEffect} from 'react';
/* import {StackScreenProps} from '@react-navigation/stack'; */
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../../theme/appTheme';

/* interface Props extends StackScreenProps<any, any> {} */
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()}>
          <Text>Hola Mundo</Text>
        </Button>
      ),
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen 1</Text>
      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navegar con argumento</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Michelle',
            })
          }>
          <Text style={styles.textButton}>Michelle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Emanuel',
            })
          }>
          <Text style={styles.textButton}>Emanuel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
