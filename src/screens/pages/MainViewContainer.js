import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import image from '../../assets/fondoprincipal.jpg'
import MenuAction from '../../common/MenuAction'

const MainViewContainer = () => {
    const styles = getStyles()
    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.textWelcome}>
                        <Text style={styles.text}>Bienvenido Cristian Martinez!</Text>
                        <Text style={styles.text}>Ya podés usar tu cuenta Sweet Silver!</Text>
                    </View>
                </ImageBackground>
                <Text style={{ marginLeft: 20, marginTop:15, fontSize: 17, marginBottom:353}}>Notificaciones</Text>
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        image: {
            height:380,
            borderWidth: 0,
            borderColor: "#8c8c8c",
            opacity: 0.8,    
        },
        textWelcome:{
            alignSelf: 'center',
            marginTop:120,
        },
        text:{
            alignSelf: 'center',
            fontSize: 22,
            color: 'black',
            marginBottom:20,
        },
    })
  )
  

export default MainViewContainer
