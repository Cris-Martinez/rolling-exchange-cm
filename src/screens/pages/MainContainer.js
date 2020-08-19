import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper'
import MenuAction from '../../common/MenuAction'
import card from '../../assets/card.jpeg'
import phone from '../../assets/telefono-inteligente.png'
import cart from '../../assets/tarjeta-de-credito.png'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MainContainer = ({ navigation }) => {
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
                        style={styles.imagePhone}
                        source={phone}
                    />
                    <Text style={styles.imageTextPhone}>Celular</Text>
                </Card>
                <Card style={styles.cardContainerRefills}>
                    <Image
                        style={styles.imageCart}
                        source={cart}
                    />
                    <Text style={styles.imageTextCart}>Ciudadana</Text>
                </Card>
            </View>
        </SafeAreaView>
            <MenuAction navigation={navigation}/>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        mainContainer:{
            flex:1,
            backgroundColor: '#f0f0f0',
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
            width: 100, 
            height: 150,
            marginBottom: 100,
            borderRadius: 10,
            marginRight: 10,
            marginLeft: 50,
            borderWidth: 1,
            borderColor: "#8c8c8c",
        },
        imagePhone: {
            width: 100,
            height:100,
            marginTop:10, 
        },
        imageCart:{
            width: 85,
            height:85,
            marginTop:10,
            marginLeft:6
        },
        imageTextPhone:{
            marginLeft: 27,
            marginTop: 10,
        },
        imageTextCart:{
            marginLeft: 21,
            marginTop: 25,
        },           
    })
  )
  

export default MainContainer
