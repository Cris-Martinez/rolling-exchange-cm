import React,{ useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native';
import { Title, Avatar, Button, Card, Paragraph, Divider, Switch  } from 'react-native-paper'
import card from '../../assets/card.jpeg'
import phone from '../../assets/telefono-inteligente.png'
import cart from '../../assets/tarjeta-de-credito.png'
import image from '../../assets/fondo.jpg'
import retirar from '../../assets/retirar.png'
import seguridad from '../../assets/seguridad.png'
import agregar from '../../assets/mas.png'


const CardContainer = () => {
    const styles = getStyles()
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
                    <View style={{marginLeft:50, width: 300, height: 110 }}>
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
                        <Image
                            style={styles.imageIcon}
                            source={agregar}
                        />
                    </View>
                    <View style={{marginLeft:50, width: 300, height: 110 }}>
                        <Text style={{ marginTop:18, marginBottom:15, fontWeight:'bold'}}>Formas de carga</Text>
                        <Text style={{ marginTop:5, marginBottom:15}}>Por transferencia o efectivo.</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Image
                            style={styles.imageIcon}
                            source={seguridad}
                        />
                    </View>
                    <View style={{marginLeft:50, width: 300, height: 110 }}>
                        <Text style={{ marginTop:18, marginBottom:15, fontWeight:'bold'}}>Seguridad</Text>
                        <Text style={{ marginTop:5, marginBottom:15}}>Podés crear o cambiar tus claves.</Text>
                    </View>
                </View>
                <Divider/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Image
                            style={styles.imageIcon}
                            source={retirar}
                        />
                    </View>
                    <View style={{marginLeft:50, width: 300, height: 110 }}>
                        <Text style={{ marginTop:18, marginBottom:15, fontWeight:'bold'}}>Retiro de efectivo</Text>
                        <Text style={{ marginTop:5, marginBottom:15}}>Red Link $5000 - Banelco $2000 por día.</Text>
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
            height:300,
            borderWidth: 0,
            borderColor: "#8c8c8c",
          },
        cardCoverContainer:{
            marginTop:130,
            width: 200,
            height: 10,
            marginLeft: 140,
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
            marginLeft:70,
            marginTop:35
        },  
    })
  )
  

export default CardContainer
