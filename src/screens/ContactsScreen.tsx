import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../theme/appTheme';
import {AuthContext} from '../context/AutnContext';

export const ContactsScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
    signOut,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
      {isLoggedIn && <Button title="SignOut" onPress={signOut} />}
    </View>
  );
};
