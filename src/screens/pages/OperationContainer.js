import React, { useState, Fragment } from 'react';
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

function OperationContainer(){

    const [ lastRates, setLastRates ] = useState(initialRates)
    const [ mainVisible, setMainVisible ] = useState(true)
    const [ fromCurrency, setFromCurrency ] = useState('usd')
    const [ amount, setAmount ] = useState('')
    const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
    const [ allCurrencies, setAllCurrencies ] =
        useState(currencies.map(curr => ({ ...curr, isFavorite: false })))
    const [ appTheme, setAppTheme ] = useState(defaultTheme)
    const updateTheme = () => {
        appTheme.name === 'darkTheme' ? setAppTheme(lightTheme) : setAppTheme(darkTheme)
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

    const updateCurrency = ( name, isFavorite ) => {
        let temp_allCurrencies = allCurrencies
        const objIndex = allCurrencies.findIndex((obj => obj.name === name))
        temp_allCurrencies[objIndex].isFavorite = !isFavorite
        setAllCurrencies(temp_allCurrencies)
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
                        allCurrencies={allCurrencies}
                        lastRates={lastRates}
                    />
                    <CurrenciesBottom
                        appTheme={appTheme}
                        updateTheme={updateTheme}
                        updateRates={updateRates}
                        lastRates={lastRates}
                        />
                    </Fragment>
                )
                :
                (
                    <Fragment>
                    <FavoritesTop appTheme={appTheme} changeScreen={setMainVisible} />
                    <FavoritesContainer
                        appTheme={appTheme}
                        allCurrencies={allCurrencies}
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
