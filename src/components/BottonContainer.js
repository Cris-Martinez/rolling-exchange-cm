import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { CurrentDate } from '../constants/date'

// lightTheme or darkTheme
import { darkTheme as theme } from '../constants/colors';

const BottonContainer = () => {
    return(
        <View style={styles.bottonContainer}>
            <Button color={theme.link} icon="update" style={styles.button}/>
            <View>
                <Text style={styles.updateText}>Última actualizacion el</Text>
                <Text style={styles.updateText}>{CurrentDate.date}</Text>
            </View>
            <Button color={theme.link} icon="theme-light-dark" style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bottonContainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.secondary,
    },
    updateText:{
        color: theme.textSecondary,
    },
    button:{
        paddingLeft: 15,
    },
})

export default BottonContainer;