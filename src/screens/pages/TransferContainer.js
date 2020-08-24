import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Paragraph, Divider, Button, IconButton } from 'react-native-paper'
import Modal from '../../common/Modal'
import Scanner from '../../common/BarCodeScanner'

const TransferContainer = () => {
    const styles = getStyles()
    const [ isVisible, setIsVisible ] = useState(false)
    const [ isVisibleQR, setIsVisibleQR ] = useState(false)

    const showModal = () => setIsVisible(true);
    const showScanner = () => setIsVisibleQR(true);

    {
        if(isVisibleQR) {
            return(
                <Scanner />
            )
        }
    }

    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 300, height: 110 }}>
                        <Paragraph style={{ marginTop:15, marginBottom:15, fontSize: 15}}>¿A quién le querés mandar plata?</Paragraph>
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold',fontSize: 13}}>Contacto Sweet Silver</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row', alignSelf:'center'}}>
                    <View>
                        <IconButton
                            onPress={() => console.log('Añadir Contacto')}
                            icon="account-multiple-plus"
                            color="black"
                            size={35}
                            style={{marginLeft:35, marginTop:25}}
                        />
                    </View>    
                    <View style={{marginLeft:15, width: 300, height: 110 }}>
                        <Text style={{ marginTop:25, marginBottom:15, fontWeight:'bold', fontSize: 15}}>Agregar contacto</Text>
                        <Text style={{ marginBottom:15, fontSize: 13 }}>Transferí a tus contactos</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{ width: 200, height: 110, marginLeft: 130}}>
                        <Text style={{ textAlign:'center', marginTop:40, fontSize:15 }}>Cuando sumes a alguien a tu lista lo vas a ver acá 😄</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:115, width: 200, height: 150, marginTop:100 }}>
                        <Button mode="contained" onPress={showModal} style={{ marginTop:40, backgroundColor:'#096dd9', width:235 }}>Nueva transferencia</Button>
                        <Button icon="qrcode-scan" color="#096dd9" style={{marginTop:13, marginLeft: 40}} onPress={showScanner}>Escanear QR</Button>
                    </View>
                </View>
                {
                    isVisible ? <Modal show={isVisible} setIsVisible={setIsVisible}/> : null
                }
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        image:{
            width: 5,
            height: 50,
            padding:20,
            marginLeft:70,
            marginTop:35,
        },
    })
  )
  

export default TransferContainer
