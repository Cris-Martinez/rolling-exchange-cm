import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper'

import flags from '../../../constants/flags'

const FavoriteCard = ({
  appTheme,
  name,
  flag,
  isFavorite,
  addFavoriteCurrency,
  updateCurrency,
}) => {
  const styles = getStyle(appTheme)

  let url = ''
  switch(flag) {
    case 'ars':
      url = flags.ars
      break
    case 'eur':
      url = flags.eur
      break
    case 'jpy':
      url = flags.jpy
      break
    case 'usd':
      url = flags.usd
      break
    case 'brl':
      url = flags.brl
      break
    case 'clp':
      url = flags.clp
      break
    case 'gbp':
      url = flags.gbp
      break
  }

  const onTouchStar = () => {
    addFavoriteCurrency({name: name, flag: flag})
    updateCurrency(name, isFavorite)
  }

  return(
    <View style={styles.card}>

      <View style={styles.leftContainer}>
        <Image
          source={url}
          style={{ width: 130, height: 70, marginRight: 20, borderRadius: 10,
            borderWidth: 1, }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          onPress={onTouchStar}
          icon={isFavorite ? 'star' : 'star-outline'}
          color="white"
        />
      </View>
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    card: {
      backgroundColor: theme.container,
      width: '90%',
      padding: 25,
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    text: {
      color: theme.textPrimary,
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
    }
  })
)

export default FavoriteCard