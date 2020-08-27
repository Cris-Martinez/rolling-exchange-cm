import React,{ useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native';
import { Title, Card, Divider, Switch, IconButton } from 'react-native-paper'
import card from '../../assets/card.jpeg'
import cart from '../../assets/tarjeta-de-credito.png'
import image from '../../assets/fondo.jpg'
import retirar from '../../assets/retirar.png'
import seguridad from '../../assets/seguridad.png'
import agregar from '../../assets/mas.png'


const CardContainer = () => {
    const styles = getStyles()
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [habilitar, setHabilitar] = useState(false);

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        setHabilitar(!habilitar);
    }

    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                <ImageBackground source={image} style={styles.image}>
                    <Card style={styles.cardCoverContainer}>
                        <Card.Cover style={styles.coverContainer} source={card}/>
                        <Title style={styles.title}>Tu tarjeta Sweet Silver</Title>
                    </Card>
                </ImageBackground>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{marginLeft:15, width: 250, height: 110 }}>
                        <Text style={{ marginTop:18, marginBottom:15, fontWeight:'bold'}}>Congelar</Text>
                        <Text style={{ marginTop:5, marginBottom:15}}>Deshabilitar temporalmente la cuenta.</Text>
                    </View>
                    <View>
                        <Switch style={{marginTop:20}} value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <IconButton
                            onPress={() => console.log('Añadir Contacto')}
                            icon="plus"
                            color="black"
                            size={35}
                            style={{marginLeft:35, marginTop:25}}
                            disabled={habilitar}
                        />
                    </View>
                    <View style={{marginLeft:50, width: 200, height: 100 }}>
                        <Text style={{ marginTop:18, marginBottom:15, fontWeight:'bold'}}>Formas de carga</Text>
                        <Text style={{ marginTop:5, marginBottom:15}}>Por transferencia o efectivo.</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <IconButton
                            onPress={() => console.log('Añadir Contacto')}
                            icon="shield-lock"
                            color="black"
                            size={35}
                            style={{marginLeft:35, marginTop:25}}
                            disabled={habilitar}
                        />
                    </View>
                    <View style={{marginLeft:50, width: 200, height: 100 }}>
                        <Text style={{ marginTop:18, marginBottom:10, fontWeight:'bold'}}>Seguridad</Text>
                        <Text style={{ marginTop:5, marginBottom:35}}>Podés crear o cambiar tus claves.</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <IconButton
                            onPress={() => console.log('Añadir Contacto')}
                            icon="credit-card-remove-outline"
                            color="black"
                            size={35}
                            style={{marginLeft:35, marginTop:25}}
                            disabled={habilitar}
                        />
                    </View>
                    <View style={{marginLeft:50, width: 200, height: 100, marginBottom: 25 }}>
                        <Text style={{ marginTop:18, marginBottom:15, fontWeight:'bold'}}>Retiro de efectivo</Text>
                        <Text style={{ marginTop:5 }}>Red Link $5000 - Banelco $2000 por día.</Text>
                    </View>
                </View>
                <Divider/>            
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        image: {
            height:200,
            borderWidth: 0,
            borderColor: "#8c8c8c",
          },
        cardCoverContainer:{
            marginTop:45,
            width: 200,
            height: 10,
            marginLeft: 135,
        },
        coverContainer:{
            height: 100
        },
        title:{
            textAlign: 'center',
            marginTop: 15,
        },
        imageIcon:{
            width: 5,
            height: 5,
            padding:12,
            marginLeft:30,
            marginTop:35
        },  
    })
  )
  

export default CardContainer
