import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  Provider as PaperProvider,
  Button,
} from 'react-native-paper';
import { colors } from './src/constants/colors';

export default function App() {
  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={styles.statusBarUnderLay} />}
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        </View>
        <Button icon="camera" mode="contained" onPress={()=> console.log("Presionado!")}>
          Presiona
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: colors.text,
  },
  card:{
    backgroundColor: colors.primary,
    width: '90%',
    padding: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarUnderLay:{
    height:25,
  }
});
