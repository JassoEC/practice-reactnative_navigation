import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AutnContext';

interface Props {
  name: string;
}

export const TouchableIcon = ({name}: Props) => {
  const {changeFavIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavIcon(name)}>
      <Icon name={name} size={80} color="#900" />
    </TouchableOpacity>
  );
};
