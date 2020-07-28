import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { CurrentDate } from '../../constants/date'

const CurrenciesBottom = ({ appTheme, updateTheme }) => {
    return(
        <View style={getStyle(appTheme, 'bottomContainer')}>
            <Button color={appTheme.link} icon="update" style={getStyle(appTheme, 'button')} />
            <View>
            <Text style={getStyle(appTheme, 'updateText')}>Ultima actualización</Text>
            <Text style={getStyle(appTheme, 'updateText')}>{CurrentDate.date}</Text>
            </View>
            <Button
            color={appTheme.link}
            icon="theme-light-dark"
            style={getStyle(appTheme, 'button')}
            onPress={updateTheme}
            />
        </View>
    )
}

const getStyle = (theme, component) => {
    switch(component) {
      case 'bottomContainer':
        return({
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          width: '100%',
          backgroundColor: theme.primary,
        })
      case 'updateText':
        return({
          color: theme.textPrimary,
        })
      case 'button':
        return({
          paddingLeft: 15,
        })
    }
  }

export default CurrenciesBottom;