import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './Recheche.styles';
interface IRechercheProps {
  value: string;
  onFindValueChange: Function;
}
const Recheche: React.FC<IRechercheProps> = props => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    Alert.alert('Nouvelle lettre', inputValue);
  }, [inputValue]);

  return (
    <View style={styles.Recheche}>
      <TextInput
        placeholder="saisie de recherche"
        onChangeText={t => {
          props.onFindValueChange(t);
        }}
        value={props.value}
      />
      <Text style={{backgroundColor: 'skyblue', color: 'tomato'}}>
        Recheche
      </Text>
    </View>
  );
};

export default Recheche;
