import React, { useState, Fragment } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import TopContainer from './src/components/TopContainer'
import CurrenciesContainer from './src/components/content/CurrenciesContainer'
import BottomContainer from './src/components/BottonContainer'
import FavoritesSearchbar from './src/components/favorites/FavoritesSearchbar'
import FavoritesContainer from './src/components/favorites/FavoritesContainer'
import MainContainer from './src/components/pages/MainContainer'
import currencies from './src/constants/currencies'

import { darkTheme as defaultTheme } from './src/constants/colors'
import { darkTheme } from './src/constants/colors'
import { lightTheme } from './src/constants/colors'

export default function App() {
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ amount, setAmount ] = useState('')
  const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
  const [ allCurrencies, setAllCurrencies ] =
    useState(currencies.map(curr => ({ ...curr, isFavorite: false })))
  const [ appTheme, setAppTheme ] = useState(defaultTheme)

  const updateTheme = () =>{
    appTheme.name === 'darkTheme' ? setAppTheme(lightTheme) : setAppTheme(darkTheme)
  }

  const addFavoriteCurrency = newCurrency => {
    setFavoriteCurrencies( prevState => [...prevState, newCurrency] )
  }

  const updateCurrency = ( name, isFavorite ) => {
    let temp_allCurrencies = allCurrencies
    const objIndex = allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[objIndex].isFavorite = !isFavorite
    setAllCurrencies(temp_allCurrencies)
  }

  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={getStyle(appTheme, 'statusBarUnderlay')} />}

      {
        mainVisible ?
        (
          <Fragment>
            <MainContainer/>
            {/* <TopContainer 
                      appTheme={appTheme}
                      amount={amount} 
                      setAmount={setAmount}/>
            <CurrenciesContainer 
                      appTheme={appTheme} 
                      changeScreen={setMainVisible} 
                      amount={amount} 
                      allCurrencies={allCurrencies}/>
            <BottomContainer 
                      appTheme={appTheme} 
                      updateTheme={updateTheme}/> */}
          </Fragment>
        )
        :
        (
          <Fragment>
            <FavoritesSearchbar appTheme={appTheme} changeScreen={setMainVisible} />
            <FavoritesContainer 
                        appTheme={appTheme}
                        allCurrencies={allCurrencies}
                        addFavoriteCurrency={addFavoriteCurrency}
                        updateCurrency={updateCurrency}/>
          </Fragment>
        )
      }
      
    </PaperProvider>
  );
}

const getStyle = (theme, component) => {
    switch(component){
      case 'statusBarUnderlay':
        return({
          height: 28,
          backgroundColor: theme.secondary,
        })
    }
}
