import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// lightTheme or darkTheme
import { lightTheme as theme } from '../../constants/colors';

const CurrencyCard = ({ name }) => {
    return(
        <View style={styles.currencyCard}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    currencyCard:{
        backgroundColor: theme.container,
        justifyContent:'center',
        width: '90%',
        padding: 25,
        margin: 10
    },
    text:{
        color: theme.textPrimary,
    },
})

export default CurrencyCard;