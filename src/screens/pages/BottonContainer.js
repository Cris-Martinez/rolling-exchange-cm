import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, IconButton } from 'react-native-paper'

const BottonContainer = ({ appTheme, updateTheme }) => {
  const styles = getStyle(appTheme)

  return(
    <View style={styles.bottomContainer}>
      <IconButton
        color={appTheme.link}
        icon="theme-light-dark"
        style={styles.button}
        onPress={updateTheme}
      />
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    bottomContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.primary,
    },
    updateText: {
      color: theme.textPrimary,
      textAlign: 'center',
    },
    button: {
      paddingLeft: 15,
    }
  })
) 

export default BottonContainer