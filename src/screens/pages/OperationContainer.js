import React, { useState, Fragment, useEffect } from 'react';
import moment from 'moment'
import { StyleSheet, View, StatusBar, Platform, Dimensions, ScrollView, SafeAreaView, } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Paragraph, Divider } from 'react-native-paper'
import CurrenciesTop from '../../screens/currencies/CurrenciesTop'
import CurrenciesContainer from '../../screens/currencies/content/CurrenciesContainer'
import CurrenciesBottom from '../../screens/currencies/CurrenciesBottom'
import FavoritesTop from '../../screens/favorites/FavoritesTop'
import FavoritesContainer from '../../screens/favorites/content/FavoritesContainer'
import { currencies, initialRates } from '../../constants/currencies'

import { darkTheme } from '../../constants/colors'
import { lightTheme } from '../../constants/colors'
import { darkTheme as defaultTheme } from '../../constants/colors'

const windowHeigh = Dimensions.get('screen').height

const THEME = '@theme'
const FAV_CURRENCIES = '@favCurrencies'

function OperationContainer(){

  const defaultTheme = darkTheme
  const defaultCurrencies = currencies.map(curr => ({ ...curr, isFavorite: false }))
  
  const getTheme = async () => {
    const theme = await AsyncStorage.getItem(THEME)
    return theme !== null ? JSON.parse(theme) : defaultTheme
  }
  const getDeviceCurrencies = async () => {
    const currencies = await AsyncStorage.getItem(FAV_CURRENCIES)
    return currencies !== null ? JSON.parse(currencies) : defaultCurrencies
  }

  const [ lastRates, setLastRates ] = useState(initialRates)
  const [ mainVisible, setMainVisible ] = useState(true)
  const [ fromCurrency, setFromCurrency ] = useState('usd')
  const [ amount, setAmount ] = useState('')
  const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
  const [ allCurrencies, setAllCurrencies ] = useState(defaultCurrencies)
  const [ deviceCurrencies, setDeviceCurrencies ] = useState([])
  const [ filteredCurrencies, setFilteredCurrencies ] = useState([])
  const [ appTheme, setAppTheme ] = useState(defaultTheme)

  useEffect(() => {
    getTheme().then(setAppTheme).catch(setAppTheme(defaultTheme))
    getDeviceCurrencies().then(setDeviceCurrencies).catch(setDeviceCurrencies(defaultCurrencies))
  }, [])

  const clearAppData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      console.log(e)
    }
  }

  const searchCurrency = term => {
    let currentCurrencies = deviceCurrencies
    let resultCurrencies = []

    if(term !== '' && term.length > 2) {
      resultCurrencies = currentCurrencies.filter(
        currency => {
          const formattedCurrency = currency.nickname.toLowerCase()
          const formattedTerm = term.toLowerCase()
          return formattedCurrency.includes(formattedTerm)
        }
      )
    } else {
      resultCurrencies = deviceCurrencies
    }

    updateList(resultCurrencies, term)
  }

  const updateList = (newList, term) => {
    term !== '' ?
      setFilteredCurrencies(newList)
    :
      setFilteredCurrencies(deviceCurrencies)
  }

  const updateTheme = async () => {
    try {
      if(appTheme.name === 'darkTheme') {
        setAppTheme(lightTheme)
        const theme = JSON.stringify(lightTheme)
        await AsyncStorage.setItem(THEME, theme)
      } else {
        setAppTheme(darkTheme)
        const theme = JSON.stringify(darkTheme)
        await AsyncStorage.setItem(THEME, theme)
      }
    } catch(e) {
      console.log(e)
    }
  }

  const styles = getStyle(appTheme)
  const updateRates = () => {
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency}`)
    .then(res => res.json())
    .then(responseJson => {
      setLastRates({...responseJson, hour: moment().format('H:mm')})
    })
    .catch(e => {
      console.log('error: ', e)
    })
  }

  const addFavoriteCurrency = newCurrency => {
    setFavoriteCurrencies( prevState => [...prevState, newCurrency] )
  }

  const updateCurrency = async ( name, isFavorite ) => {
    let temp_allCurrencies = deviceCurrencies
    const objIndex = allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[objIndex].isFavorite = !isFavorite
    setAllCurrencies(temp_allCurrencies)
    AsyncStorage.setItem(FAV_CURRENCIES, JSON.stringify(temp_allCurrencies))
  }

    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20, minHeight: windowHeigh}}>
            {
          mainVisible ?
          (
            <Fragment>
              <CurrenciesTop
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                amount={amount}
                setAmount={setAmount}
                updateRates={updateRates}
              />
              <CurrenciesContainer
                appTheme={appTheme}
                fromCurrency={fromCurrency}
                amount={amount}
                changeScreen={setMainVisible}
                allCurrencies={deviceCurrencies}
                lastRates={lastRates}
              />
              <CurrenciesBottom
                appTheme={appTheme}
                updateTheme={updateTheme}
                updateRates={updateRates}
                lastRates={lastRates}
                clearAppData={clearAppData}
              />
            </Fragment>
          )
          :
          (
            <Fragment>
              <FavoritesTop
                appTheme={appTheme}
                changeScreen={setMainVisible}
                searchCurrency={searchCurrency}
              />
              <FavoritesContainer
                appTheme={appTheme}
                allCurrencies={filteredCurrencies}
                addFavoriteCurrency={addFavoriteCurrency}
                updateCurrency={updateCurrency}
              />
            </Fragment>
          )
        }
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyle = () => (
    StyleSheet.create({
        image:{
            width: 5,
            height: 10,
            padding:20,
            marginLeft:25,
            marginTop:35
        },
    })
  )
  

export default OperationContainer
