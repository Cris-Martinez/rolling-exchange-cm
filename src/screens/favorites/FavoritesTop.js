import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const FavoritesTop = ({ appTheme, changeScreen, searchCurrency }) => {
  const styles = getStyle(appTheme)
  const [ input, setInput ] = useState('')

  useEffect(
    () => searchCurrency(input)
    , [input]
  )

  return(
    <View style={styles.favoritesSearchbar}>
      <Button
        onPress={() => changeScreen(true)}
        color={appTheme.link}
        icon="keyboard-backspace"
        style={{marginTop:'-10%'}}
      />
      <TextInput
        style={styles.input}
        label="¿Que moneda estás buscando?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    favoritesSearchbar: {
      flex: 1.6,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.secondary,
      marginTop:'-6%',
      height:120
    },
    input: {
      width: '60%',
      paddingBottom: 10,
      height: 50,
      marginTop:'-10%'
    }
  })
)

export default FavoritesTop