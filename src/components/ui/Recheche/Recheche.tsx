import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './Recheche.styles';
interface IRechercheProps {}
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
          setInputValue(t);
          console.log(inputValue);
        }}
      />
      <Text style={{backgroundColor: 'skyblue', color: 'tomato'}}>
        Recheche
      </Text>
    </View>
  );
};

export default Recheche;
