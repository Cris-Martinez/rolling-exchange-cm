import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, fromCurrency, setFromCurrency, amount, setAmount, updateRates }) => {
  const styles = getStyle(appTheme)
  const [ showSelection, setShowSelection ] = useState(false)
  const requireFlag = {
    ars: require('../../assets/flags/ars.jpg'),
    usd: require('../../assets/flags/usd.jpg'),
    eur: require('../../assets/flags/eur.jpg'),
    jpy: require('../../assets/flags/jpy.jpg'),
    brl: require('../../assets/flags/real.jpg'),
    clp: require('../../assets/flags/chileno.jpg'),
    gbp: require('../../assets/flags/libra.jpg'),
  }
  const onHandleShowSelection = () => {
    setShowSelection(!showSelection)
  }
  const onHandleSelectCurrency = currency => {
    setFromCurrency(currency)
    setShowSelection(!showSelection)
    updateRates()
  }

  return(
    <>
      <View style={styles.topContainer}>
        <View style={styles.fromCurrency}>
          <TouchableOpacity style={styles.fromCurrencyButton} onPress={onHandleShowSelection}>
            <Image
              source={requireFlag[fromCurrency]}
              style={{ width: 50, height: 50, borderRadius: 10,
                borderWidth: 1, }}
            />
            <Text style={styles.fromCurrencyName}>{fromCurrency.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          label="¿Cuanto queres convertir?"
          value={amount}
          onChangeText={input => setAmount(input)}
        />
        {
          amount !== '' ?
            <Button onPress={() => setAmount('')} icon='close' color={appTheme.link} />
          :
            <View style={{ width: 65 }} />
        }
      </View>
      {
        showSelection &&
        <View style={styles.selection}>
          <Text style={styles.selectionText}>Seleccioná una moneda</Text>
          <View style={styles.selectionCurrencies}>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('ars')}>
                <Image
                  source={requireFlag['ars']}
                  style={{ width: 50, height: 50, borderRadius: 10,
                    borderWidth: 1, }}
                />
                <Text style={styles.fromCurrencyName}>{'ars'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('usd')}>
                <Image
                  source={requireFlag['usd']}
                  style={{ width: 50, height: 50, borderRadius: 10,
                    borderWidth: 1, }}
                />
                <Text style={styles.fromCurrencyName}>{'usd'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('eur')}>
                <Image
                  source={requireFlag['eur']}
                  style={{ width: 50, height: 50, borderRadius: 10,
                    borderWidth: 1, }}
                />
                <Text style={styles.fromCurrencyName}>{'eur'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
            <TouchableOpacity onPress={() => onHandleSelectCurrency('jpy')}>
              <Image
                source={requireFlag['jpy']}
                style={{ width: 50, height: 50, borderRadius: 10,
                  borderWidth: 1, }}
              />
              <Text style={styles.fromCurrencyName}>{'jpy'.toUpperCase()}</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
            <TouchableOpacity onPress={() => onHandleSelectCurrency('brl')}>
              <Image
                source={requireFlag['brl']}
                style={{ width: 50, height: 50, borderRadius: 10,
                  borderWidth: 1, }}
              />
              <Text style={styles.fromCurrencyName}>{'brl'.toUpperCase()}</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
            <TouchableOpacity onPress={() => onHandleSelectCurrency('clp')}>
              <Image
                source={requireFlag['clp']}
                style={{ width: 50, height: 50, borderRadius: 10,
                  borderWidth: 1, }}
              />
              <Text style={styles.fromCurrencyName}>{'clp'.toUpperCase()}</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
            <TouchableOpacity onPress={() => onHandleSelectCurrency('gbp')}>
              <Image
                source={requireFlag['gbp']}
                style={{ width: 50, height: 50, borderRadius: 10,
                  borderWidth: 1, }}
              />
              <Text style={styles.fromCurrencyName}>{'gbp'.toUpperCase()}</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    topContainer: {
      flex: 1.6,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.secondary,
      marginTop:'-10%'
    },
    input: {
      width: '60%',
      paddingBottom: 10,
      height: 60
    },
    fromCurrency: {
      width: '20%',
      paddingBottom: 10,
      height: 60,
      marginRight: 1,
      alignItems: 'center',
    },
    fromCurrencyName: {
      color: theme.link,
      textAlign: 'center',
      marginTop: 5,
    },
    selection: {
      width: '100%',
      backgroundColor: theme.secondary,
    },
    selectionText: {
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    selectionCurrencies: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '25%',
      width: '65%',
      paddingBottom: 10,
      marginLeft:35,
    },
    selectionCurrencyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '25%',
      paddingTop: 10,
    },
    fromCurrencyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: 60,
    }
  })
)

export default CurrenciesTop