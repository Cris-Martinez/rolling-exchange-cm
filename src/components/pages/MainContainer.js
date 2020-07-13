import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { Title, Avatar, Button, Card, Paragraph } from 'react-native-paper'
import card from '../../assets/card.jpeg'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MainContainer = () => {
    const styles = getStyles()
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Mi caja de ahorro</Text>
            <Card style={styles.cardContainer}>
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
            <Card style={styles.cardContainer}>
                <Card.Content>
                    <View style={styles.iconShareContainer}>
                        <Button icon="share-variant" />
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
        </View>
    )
}

const getStyles = () => (
    StyleSheet.create({
        mainContainer:{
            flex:1,
            backgroundColor: 'white',
        },
        cardContainer: {
            backgroundColor: '#fff1f0',
            width: '90%',
            marginLeft: '5%',
            height: '30%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8c8c8c",
        },
        infoContainer:{
            marginTop: 50,
        },
        iconShareContainer:{
            alignSelf: 'flex-end',
            width: 30,
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
        }  
    })
  )
  

export default MainContainer
