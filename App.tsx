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
import Header from './src/components/ui/Button/Header';
import {logoImg} from './assert/datauri/logo';
import {products} from './db.json';
import Recheche from './src/components/ui/Recheche/Recheche';
import ScrollableProducts from './src/components/layout/ScrollableProducts/ScrollableProducts';
import ListProducts from './src/components/ui/ListProducts/ListProducts';
import {IProduct} from './src/interfaces/Iproduct';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header Text="Bonjour" Img={logoImg} />
      <Recheche />
      <ScrollableProducts>
        {products.map((item: IProduct, position) => {
          return <ListProducts produit={item} key={'produit-' + position} />;
        })}
      </ScrollableProducts>
    </SafeAreaView>
  );
}

export default App;
