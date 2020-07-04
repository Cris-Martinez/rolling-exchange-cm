import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import CurrenciesContainer from './src/components/content/CurrenciesContainer';
import TopContainer from './src/components/TopContainer';
import BottonContainer from './src/components/BottonContainer';
import {
  Provider as PaperProvider,
} from 'react-native-paper';

// lightTheme or darkTheme
import { darkTheme as theme } from './src/constants/colors';

export default function App() {
  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderLay} />}

      <TopContainer/>
      <CurrenciesContainer />
      <BottonContainer />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarUnderLay:{
    height:25,
    backgroundColor: theme.secondary,
  }
});
