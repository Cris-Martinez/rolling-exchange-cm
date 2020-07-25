import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { Title, Avatar, Button, Card, Paragraph } from 'react-native-paper'
import card from '../../assets/card.jpeg'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MainContainer = () => {
    const styles = getStyles()
    return(
    <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.text}>Mi caja de ahorro</Text>
            <Card style={styles.cardContainerBox}>
                <Card.Content>
                    <View style={styles.iconShareContainer}>
                        <Button icon="share-variant" />
                    </View>
                    <View>
                        <Paragraph>Alias: cristian.martinez</Paragraph>
                    </View>
                    <View>
                        <Paragraph>CBU: 4444 5555 6666 7777 8888</Paragraph>
                    </View>
                    <View style={styles.infoContainer}>
                        <Paragraph>
                            $0,00
                        </Paragraph>
                        <Text>TNA 10% de interés anual</Text>
                    </View>
                </Card.Content>
            </Card>
            <Text style={styles.text}>Mi tarjeta</Text>
            <Card style={styles.cardCoverContainer}>
                <Card.Cover style={styles.coverContainer} source={card}/>
            </Card>
            <Text style={styles.text}>Otros productos</Text>
            <Card style={styles.cardContainerProduct}>
                <Card.Content>
                    <View style={styles.iconShareContainer}>
                        <Button icon="cash-multiple" />
                    </View>
                    <View>
                        <Paragraph>Plazo Fijo</Paragraph>
                    </View>
                    <View>
                        <Paragraph>TNA 32%</Paragraph>
                    </View>
                    <Button >Solicitar</Button>
                </Card.Content>
            </Card>
            <Text style={styles.text}>Recargas</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Card style={styles.cardContainerRefills}>
                    <Image
                        src={<Avatar.Icon icon="cellphone-android"/>}
                    />
                    <Text>Celular</Text>
                    {/* <Button icon="cellphone-android">Celular</Button> */}
                </Card>
                <Card style={styles.cardContainerRefills}>
                    <Image
                        src={<Avatar.Icon icon="card-bulleted"/>}
                    />
                    <Text>Ciudadana</Text>
                    {/* <Button icon="card-bulleted">Ciudadana</Button> */}
                </Card>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        mainContainer:{
            flex:1,
            backgroundColor: 'white',
        },
        cardContainerBox: {
            backgroundColor: '#fff1f0',
            width: '90%',
            marginLeft: '5%',
            height: '20%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8c8c8c",
            marginBottom:1
        },
        infoContainer:{
            marginTop: 20,
        },
        iconShareContainer:{
            alignSelf: 'flex-end',
            width: 40,
            height: 5,
        },
        text:{
            padding:15,
            fontSize: 16,
        },
        coverContainer:{
            borderRadius: 20,
        },
        cardCoverContainer:{
            width: '90%',
            marginLeft: '5%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8c8c8c",
        },
        scrollView: {
            marginHorizontal: 1,
        },
        cardContainerProduct: {
            backgroundColor: '#fff1f0',
            width: '90%',
            marginLeft: '5%',
            height: '15%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8c8c8c",
        },
        cardContainerRefills: {
            backgroundColor: '#fff1f0',
            width: 150, 
            height: 90,
            marginBottom:30,
            borderRadius: 10,
            marginRight: 10,
            marginLeft: 15,
            borderWidth: 1,
            borderColor: "#8c8c8c",
        }  
    })
  )
  

export default MainContainer
