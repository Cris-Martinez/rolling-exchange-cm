import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import CurrenciesContainer from './src/components/content/CurrenciesContainer';
import {
  Provider as PaperProvider,
} from 'react-native-paper';
import { lightTheme as theme } from './src/constants/colors';

export default function App() {
  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderLay} />}

      <CurrenciesContainer />

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  statusBarUnderLay:{
    height:25,
    backgroundColor: theme.secondary,
  }
});
