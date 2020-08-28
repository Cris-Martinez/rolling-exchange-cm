import React, { useState, Fragment } from 'react';
import moment from 'moment'
import { StyleSheet, View, StatusBar, Platform, Dimensions } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './src/screens/pages/MainContainer'
import ContactContainer from './src/screens/pages/ContactContainer'
import CardContainer from './src/screens/pages/CardContainer'
import ServiceContainer from './src/screens/pages/ServiceContainer'
import TransferContainer from './src/screens/pages/TransferContainer'
import ProfileContainer from './src/screens/pages/ProfileContainer'
import OperationContainer from './src/screens/pages/OperationContainer'

  const windowHeigh = Dimensions.get('screen').height
  const Stack = createStackNavigator();

function App() {

  return (
    <PaperProvider>
      <View style={{ minHeight: windowHeigh }}>
        {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Sweet Silver"
              screenOptions={{
                  headerStyle: {
                    backgroundColor: '#3f6600',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                  
                  },
                }}
              >
            <Stack.Screen name="Sweet Silver" component={MainContainer}/>
            <Stack.Screen name="Contacto" component={ContactContainer} />
            <Stack.Screen name="Tarjeta" component={CardContainer} />
            <Stack.Screen name="Recargas y Pagos" component={ServiceContainer} />
            <Stack.Screen name="Transferencias" component={TransferContainer} />
            <Stack.Screen name="Perfil" component={ProfileContainer} />
            <Stack.Screen name="Operacion de Cambio" 
                          component={OperationContainer}
                          />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

const getStyle = theme => (
  StyleSheet.create({
    statusBarUnderlay: {
      height: 28,
      backgroundColor: theme.secondary,
    }
  })
)

export default App;