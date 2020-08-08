import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Paragraph, Divider, Button } from 'react-native-paper'
import anadir from '../../assets/anadir.png'

const TransferContainer = () => {
    const styles = getStyles()
    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 300, height: 110 }}>
                        <Paragraph style={{ marginTop:15, marginBottom:15}}>¿A quién le querés mandar plata?</Paragraph>
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold'}}>Contacto Sweet Silver</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Image
                            style={styles.image}
                            source={anadir}
                        />
                    </View>    
                    <View style={{marginLeft:15, width: 300, height: 110 }}>
                        <Text style={{ marginTop:25, marginBottom:15, fontWeight:'bold'}}>Agregar contacto</Text>
                        <Text style={{ marginBottom:15 }}>Transferí a tus contactos</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:85, width: 200, height: 110 }}>
                        <Text style={{ textAlign:'center', marginTop:40 }}>Cuando sumes a alguien a tu lista lo vas a ver acá 😄</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:85, width: 200, height: 150, marginTop:100 }}>
                        <Button mode="contained" onPress={() => console.log('Nueva transferencia')} style={{ marginTop:40, backgroundColor:'#096dd9' }}>Nueva transferencia</Button>
                        <Button icon="qrcode-scan" color="#096dd9" style={{marginTop:13}} onPress={() => console.log('Nueva transferencia QR')}>Escanear QR</Button>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        image:{
            width: 5,
            height: 10,
            padding:20,
            marginLeft:70,
            marginTop:35
        },
    })
  )
  

export default TransferContainer
