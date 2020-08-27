import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Paragraph, Divider } from 'react-native-paper'
import phone from '../../assets/telefono.png'
import chat from '../../assets/comentario.png'
import contacto from '../../assets/whatsapp.png'

const ContactContainer = () => {
    const styles = getStyles()
    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 250, height: 110 }}>
                        <Paragraph style={{ marginTop:15, marginBottom:15}}>Teléfonos Útiles (Lunes a Viernes de 8hrs a 22hrs. Sábado y domingo de 8hrs a 20hrs.)</Paragraph>
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold'}}>08109998889</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={phone}
                        />
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 250, height: 110 }}>
                        <Text style={{ marginTop:15, marginBottom:15}}>Chat</Text>
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold'}}>¿Necesitás ayuda?</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={contacto}
                        />
                    </View>    
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 250, height: 110 }}>
                        <Text style={{ marginTop:15, marginBottom:15}}>Comunidad</Text>
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold'}}>Resolvé tus datos</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={chat}
                        />
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 250, height: 130 }}>
                        <Paragraph style={{ marginTop:15, marginBottom:15}}>Tarjeta AMEX desde el exterior</Paragraph>    
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold'}}>Número internacional (cobro revertido)</Text>
                        <Text style={{ marginBottom:20, fontWeight:'bold'}}>001-312-999-8888</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={phone}
                        />
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 250, height: 130 }}>
                        <Paragraph style={{ marginTop:15, marginBottom:15}}>Número gratuito dentro de Estados Unidos</Paragraph>    
                        <Text style={{ marginTop:5, marginBottom:15, fontWeight:'bold'}}>001-999-888-9898</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.image}
                            source={phone}  
                        />
                    </View>
                </View>
                <Divider/>
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
            marginLeft:25,
            marginTop:35
        },
    })
  )
  

export default ContactContainer
