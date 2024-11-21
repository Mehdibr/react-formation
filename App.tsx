/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/ui/Button/Button';
import Header from './src/components/ui/Button/Header';
import {logoImg} from './assert/datauri/logo';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header Text="Bonjour" Img={logoImg} />
      <View style={{height: 50}}>
        <Text
          style={{
            color: 'white',
            backgroundColor: '#088496',
            textAlign: 'center',
          }}>
          Mehdi Ben Rejeb
        </Text>
      </View>
      <Button action={() => Alert.alert('OK!!')}>
        <Text style={{textAlign: 'center'}}>Mon bouton</Text>
      </Button>
    </SafeAreaView>
  );
}

export default App;
